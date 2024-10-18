"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <motion.button
        layout
        className="my-2 rounded-md border p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        show/hidden
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ scale: 0, rotate: "0deg" }}
            animate={{ scale: 1, rotate: "180deg", y: [0, 100, -100, -100, 0] }}
            exit={{ scale: 0, rotate: "0deg" }}
            transition={{
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.7, 1],
            }}
            className="size-24 rounded-md bg-blue-600"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
