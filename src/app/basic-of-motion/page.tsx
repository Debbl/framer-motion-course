"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid h-screen place-content-center justify-items-center gap-4">
      <motion.button
        className="rounded-md border p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        layout
        onClick={() => setIsVisible(!isVisible)}
      >
        show/hidden
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ scale: 0, rotate: "0deg", y: 0 }}
            animate={{ scale: 1, rotate: "180deg", y: [0, 10, -10, -10, 0] }}
            exit={{ scale: 0, rotate: "0deg", y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="size-24 rounded-md bg-blue-600"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
