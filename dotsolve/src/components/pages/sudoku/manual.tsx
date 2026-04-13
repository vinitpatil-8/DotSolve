import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Floating from "../../headings/floating";
import Heading from "../../headings/primaryHeading";
import Footer from "../../sections/footer";
import Subtext from "../../headings/secondaryHeading.tsx";
import Btn from "../../button/primaryButton.tsx";

const Manual = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);

  const [grid, setGrid] = useState<number[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  const [given, setGiven] = useState<boolean[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(false))
  );

  const [isSolving, setIsSolving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const resetGrid = () => {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(0)));
    setGiven(Array.from({ length: 9 }, () => Array(9).fill(false)));
    setSelected(null);
    setIsSolving(false);
  };

  const handleChange = (row: number, col: number, value: string) => {
    if (isSolving) return;

    if (value === "" || /^[1-9]$/.test(value)) {
      const newGrid = grid.map((r) => [...r]);
      newGrid[row][col] = value === "" ? 0 : parseInt(value);
      setGrid(newGrid);
    }
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

        if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
          return false;
        }

        seen.add(rowKey);
        seen.add(colKey);
        seen.add(boxKey);
      }
    }

    return true;
  };

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

  const solveSudoku = (board: number[][]): boolean => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;

              if (solveSudoku(board)) return true;

              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const handleSolve = async () => {
    if (isSolving) return;

    if (!isGridValid(grid)) {
      setError("Enter a valid Sudoku grid 🚫");
      setTimeout(() => resetGrid(), 300);
      return;
    }

    const givenGrid = grid.map((row) => row.map((cell) => cell !== 0));
    setGiven(givenGrid);

    setIsSolving(true);

    const solvedGrid = grid.map((r) => [...r]);
    const solved = solveSudoku(solvedGrid);

    if (!solved) {
      setError("No solution exists ❌");
      setTimeout(() => resetGrid(), 300);
      return;
    }

    const newGrid = grid.map((r) => [...r]);

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!givenGrid[i][j]) {
          newGrid[i][j] = solvedGrid[i][j];
          setGrid(newGrid.map((r) => [...r]));
          await new Promise((res) => setTimeout(res, 15));
        }
      }
    }

    setIsSolving(false);
  };

  return (
    <div className="full-body w-full min-h-dvh flex flex-col">
      <div className="h-fit w-full">
        <div className="w-fit absolute" onClick={() => navigate(-1)}>
          <Floating
            class="sm:hover:text-[1.55rem] hover:text-[1.30rem] transition-all duration-300"
            value="click to go back"
          />
        </div>

        <div className="w-full flex justify-center mt-18">
          <Heading value="Enter The Grid" />
        </div>

        <div className="w-full flex justify-center mt-18">
          <Subtext value="Enter the grid and press solve :)" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-10">
        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded shadow-md animate-pulse">
            {error}
          </div>
        )}

        <div className="w-full flex justify-center px-2 sm:px-4 mt-4">
          <div className="grid grid-cols-9 border-2 sm:border-4 border-black bg-white">
            {grid.map((row, i) =>
              row.map((cell, j) => (
                <input
                  key={`${i}-${j}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={cell === 0 ? "" : cell}
                  onFocus={() => setSelected({ row: i, col: j })}
                  onBlur={() => setSelected(null)}
                  onChange={(e) => handleChange(i, j, e.target.value)}
                  className={`
                    w-[9vw] h-[9vw] max-w-15 max-h-15
                    text-sm sm:text-base md:text-lg lg:text-xl
                    text-center font-semibold outline-none
                    border border-black

                    ${(j % 3 === 2 && j !== 8) ? "border-r-2 sm:border-r-4" : ""}
                    ${(i % 3 === 2 && i !== 8) ? "border-b-2 sm:border-b-4" : ""}

                    ${selected && (selected.row === i || selected.col === j)
                      ? "bg-yellow-100"
                      : "bg-white"
                    }

                    ${selected?.row === i && selected?.col === j
                      ? "bg-yellow-300"
                      : ""
                    }

                    ${given[i][j] ? "bg-gray-300 font-bold" : ""}
                    ${!given[i][j] && grid[i][j] !== 0 ? "bg-green-200" : ""}
                  `}
                />
              ))
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6">
          <div onClick={handleSolve}>
            <Btn value={isSolving ? "Solving..." : "Solve"} />
          </div>

          <div onClick={resetGrid}>
            <Btn value="Reset" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Manual;