import { useState } from "react";
import Tesseract from "tesseract.js";

const Upload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [grid, setGrid] = useState<number[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [loading, setLoading] = useState(false);
  const [isSolving, setIsSolving] = useState(false);

  // 📸 Upload
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
  };

  // 🔄 Reset
  const handleReset = () => {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(0)));
    setImage(null);
    setLoading(false);
    setIsSolving(false);
  };

  // 🧠 OCR
  const extractNumbers = async () => {
    if (!image) return;

    setLoading(true);

    const img = new Image();
    img.src = image;
    await new Promise((res) => (img.onload = res));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const cellWidth = canvas.width / 9;
    const cellHeight = canvas.height / 9;

    const newGrid: number[][] = Array.from({ length: 9 }, () =>
      Array(9).fill(0)
    );

    const tasks: Promise<void>[] = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const task = (async () => {
          const cellCanvas = document.createElement("canvas");
          const cellCtx = cellCanvas.getContext("2d")!;

          cellCanvas.width = cellWidth;
          cellCanvas.height = cellHeight;

          cellCtx.drawImage(
            canvas,
            j * cellWidth,
            i * cellHeight,
            cellWidth,
            cellHeight,
            0,
            0,
            cellWidth,
            cellHeight
          );

          const dataUrl = cellCanvas.toDataURL();

          try {
            const result = await Tesseract.recognize(dataUrl, "eng");

            // ✅ FIX double digit
            const cleaned = result.data.text.replace(/[^1-9]/g, "");
            const digit = cleaned.length > 0 ? parseInt(cleaned[0]) : 0;

            newGrid[i][j] = digit;
          } catch {
            newGrid[i][j] = 0;
          }
        })();

        tasks.push(task);
      }
    }

    await Promise.all(tasks);

    setGrid(newGrid);
    setLoading(false);
  };

  const isGridValid = (board: number[][]): boolean => {
  const seen = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === 0) continue;

      const rowKey = `r${i}-${num}`;
      const colKey = `c${j}-${num}`;
      const boxKey = `b${Math.floor(i / 3)}${Math.floor(j / 3)}-${num}`;

      if (
        seen.has(rowKey) ||
        seen.has(colKey) ||
        seen.has(boxKey)
      ) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }

  return true;
};

  // 🧠 Sudoku logic
  const isValid = (board: number[][], row: number, col: number, num: number) => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
      if (board[x][col] === num) return false;
    }

    const sr = row - (row % 3);
    const sc = col - (col % 3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[sr + i][sc + j] === num) return false;
      }
    }

    return true;
  };

  const solveSudoku = (
  board: number[][],
  startTime: number,
  timeLimit: number
): boolean => {
  // ⛔ stop if too slow
  if (Date.now() - startTime > timeLimit) return false;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;

            if (solveSudoku(board, startTime, timeLimit)) return true;

            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

  // 🔥 Animated Solve
  const handleSolve = async () => {
  if (isSolving) return;

  if (!isGridValid(grid)) {
    alert("Invalid Sudoku ❌");
    return;
  }

  setIsSolving(true);

  const given = grid.map(row => row.map(cell => cell !== 0));
  const solvedGrid = grid.map(r => [...r]);

  await new Promise(res => setTimeout(res, 0));

  // ⏱️ 1 second limit (tweak if needed)
  const solved = solveSudoku(solvedGrid, Date.now(), 1000);

  if (!solved) {
    alert("Unsolvable or too complex 😕 Try another image.");
    setIsSolving(false);
    return;
  }

  // 🎬 animate
  const newGrid = grid.map(r => [...r]);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!given[i][j]) {
        newGrid[i][j] = solvedGrid[i][j];
        setGrid(newGrid.map(r => [...r]));
        await new Promise(res => setTimeout(res, 20));
      }
    }
  }

  setIsSolving(false);
};

  return (
    <div className="full-body w-full min-h-dvh flex flex-col items-center gap-6 p-6 overflow-x-hidden">

      <h1 className="text-2xl font-bold">Upload Sudoku</h1>

      <input type="file" accept="image/*" onChange={handleUpload} />

      {image && (
        <img src={image} alt="preview" className="w-64 border" />
      )}

      <button
        onClick={extractNumbers}
        className="px-4 py-2 bg-black text-white rounded"
      >
        {loading ? "Scanning..." : "Detect Grid"}
      </button>

      {/* GRID */}
      <div className="grid grid-cols-9 border-4 border-black bg-white">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`
                w-[9vw] h-[9vw] max-w-[50px] max-h-[50px]
                flex items-center justify-center font-semibold
                border border-black
                transition-all duration-150

                ${(j % 3 === 2 && j !== 8) ? "border-r-4" : ""}
                ${(i % 3 === 2 && i !== 8) ? "border-b-4" : ""}
              `}
            >
              {cell || ""}
            </div>
          ))
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        <button
          onClick={handleSolve}
          disabled={isSolving}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {isSolving ? "Solving..." : "Solve"}
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default Upload;