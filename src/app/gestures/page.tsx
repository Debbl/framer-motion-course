"use client";
import { motion, MotionConfig } from "framer-motion";
import React from "react";

export default function Gestures() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <MotionConfig transition={{ duration: 0.2 }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "2deg" }}
          className="rounded-md border bg-red-600 p-2 text-white"
        >
          Click me!
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "-2deg" }}
          className="rounded-md border bg-blue-800 p-2 text-white"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
