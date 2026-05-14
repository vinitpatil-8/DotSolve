import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type SelectorProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Selector = ({ selected, setSelected }: SelectorProps) => {
  return (
    <div className="pt-15">
      <SlideTabs selected={selected} setSelected={setSelected} />
    </div>
  );
};

type SlideTabsProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const SlideTabs = ({ setSelected }: SlideTabsProps) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setSelected={setSelected} setPosition={setPosition}>
        AI Helper
      </Tab>

      <Tab setSelected={setSelected} setPosition={setPosition}>
        Auto Solver
      </Tab>

      <Tab setSelected={setSelected} setPosition={setPosition}>
        AI Puzzles
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Tab = ({ children, setPosition, setSelected }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onClick={() => setSelected(children as string)}
      onMouseEnter={() => {
        if (!ref.current) return;

        const parent = ref.current.parentElement;

        if (!parent) return;

        const { left: parentLeft } = parent.getBoundingClientRect();
        const { left, width } = ref.current.getBoundingClientRect();

        setPosition({
          left: left - parentLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

type CursorProps = {
  position: Position;
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      style={{
        top: 4,
      }}
    />
  );
};

export default Selector;