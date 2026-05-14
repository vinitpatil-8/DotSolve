import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Selector from "../misc/selector.tsx";
import Footer from "../sections/footer.tsx";

import Menu from "./menu.tsx";
import Aihelper from "./aihelper.tsx";
import Puzzles from "./puzzles.tsx";

const Menupage = () => {
  // DEFAULT CHANGED HERE
  const [selected, setSelected] = useState("AI Helper");

  const renderPage = () => {
    switch (selected) {
      case "AI Helper":
        return <Aihelper />;

      case "Auto Solver":
        return <Menu />;

      case "AI Puzzles":
        return <Puzzles />;

      default:
        return <Aihelper />;
    }
  };

  return (
    <div className="full-body w-full min-h-dvh flex flex-col">
      <Selector selected={selected} setSelected={setSelected} />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Menupage;