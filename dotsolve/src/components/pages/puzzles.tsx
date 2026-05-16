import { useEffect, useState } from "react";

import Heading from "../headings/primaryHeading";
import SecondaryHeading from "../headings/secondaryHeading";

type RiddleResponse = {
  riddle: string;
  answer: string;
};

const categories = [
  {
    id: "funny",
    title: "Funny",
    color: "#ec4899",
    emoji: "😂",
  },
  {
    id: "logic",
    title: "Logic",
    color: "#8b5cf6",
    emoji: "🧠",
  },
  {
    id: "mystery",
    title: "Mystery",
    color: "#0f172a",
    emoji: "🕵️",
  },
  {
    id: "science",
    title: "Science",
    color: "#06b6d4",
    emoji: "🧪",
  },
  {
    id: "math",
    title: "Math",
    color: "#f97316",
    emoji: "➗",
  },
];

const RevealAnswer = ({
  answer,
}: {
  answer: string;
}) => {
  const [clicks, setClicks] = useState(0);

  const revealed = clicks >= 2;

  return (
    <div
      onClick={() =>
        setClicks((prev) => prev + 1)
      }
      className="
        bg-black
        text-white
        rounded-4xl
        p-8
        cursor-pointer
        transition-all
        duration-300
        hover:scale-[1.01]
        select-none
      "
    >

      {!revealed ? (
        <div className="flex flex-col gap-3">

          <p
            className="
              text-sm
              uppercase
              tracking-widest
              opacity-60
            "
          >
            Answer Locked
          </p>

          <h3
            className="
              text-2xl
              font-bold
            "
          >
            {clicks === 0
              ? "Click once for a hint 👀"
              : "Click again to reveal answer 🔓"}
          </h3>

        </div>
      ) : (
        <div className="animate-[fadeIn_0.4s_ease]">

          <p
            className="
              text-sm
              uppercase
              tracking-widest
              opacity-60
              mb-3
            "
          >
            Answer
          </p>

          <h3
            className="
              text-2xl
              font-bold
            "
          >
            {answer}
          </h3>

        </div>
      )}

    </div>
  );
};

const Puzzles = () => {
  const [selected, setSelected] =
    useState("funny");

  const [loading, setLoading] =
    useState(false);

  const [riddle, setRiddle] =
    useState<RiddleResponse | null>(null);

  const fetchRiddle = async (
    category: string
  ) => {
    try {
      setLoading(true);

      setRiddle(null);

      const response = await fetch(
        `https://riddles-api-eight.vercel.app/${category}`
      );

      const data = await response.json();

      setTimeout(() => {
        setRiddle(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRiddle(selected);
  }, [selected]);

  return (
    <div className="w-full min-h-dvh flex flex-col overflow-hidden px-4">

      {/* HEADING */}
      <div className="h-fit w-full flex flex-col items-center mt-15 gap-8">
        <Heading value="Puzzles" />
        <SecondaryHeading value="Select Your Fav Genre" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full flex justify-center mt-12 mb-20">

        <div
          className="
            w-full
            max-w-6xl
            min-h-137.5
            bg-white
            rounded-4xl
            overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            flex
            flex-col
            md:flex-row
          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              w-full
              md:w-[320px]
              border-b
              md:border-b-0
              md:border-r
              border-gray-200
              p-6
              flex
              flex-col
              gap-4
            "
          >

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setSelected(category.id)
                }
                className={`
                  w-full
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  text-left

                  ${
                    selected === category.id
                      ? "bg-black text-white scale-[1.02]"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                <span className="text-2xl">
                  {category.emoji}
                </span>

                <span className="font-semibold text-lg">
                  {category.title}
                </span>
              </button>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex-1
              flex
              items-center
              justify-center
              p-8
              relative
            "
          >

            {/* LOADER */}
            {loading && (
              <div className="flex flex-col items-center gap-6">

                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    border-4
                    border-gray-300
                    border-t-black
                    animate-spin
                  "
                />

                <p className="text-gray-500 text-lg">
                  Generating riddle...
                </p>

              </div>
            )}

            {/* CONTENT */}
            {!loading && riddle && (
              <div
                className="
                  w-full
                  max-w-2xl
                  flex
                  flex-col
                  gap-8
                  animate-[fadeIn_0.4s_ease]
                "
              >

                {/* CATEGORY */}
                <div className="flex items-center gap-4">

                  <div
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-black
                      text-white
                      text-sm
                      font-semibold
                    "
                  >
                    {
                      categories.find(
                        (c) =>
                          c.id === selected
                      )?.title
                    }
                  </div>

                </div>

                {/* RIDDLE */}
                <div
                  className="
                    bg-[#fafafa]
                    border
                    border-gray-200
                    rounded-4xl
                    p-8
                    shadow-sm
                  "
                >
                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      leading-relaxed
                    "
                  >
                    {riddle.riddle}
                  </h2>
                </div>

                {/* ANSWER */}
                <RevealAnswer
                  answer={riddle.answer}
                />

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Puzzles;