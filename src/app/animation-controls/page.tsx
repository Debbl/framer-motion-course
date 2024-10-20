"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = async () => {
    await controls.start("flip");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await controls.start("initial");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="my-2 rounded-md border px-2 py-1"
      >
        Flip it
      </button>

      <motion.div
        animate={controls}
        variants={{
          initial: { scale: 1, rotate: "0deg" },
          flip: { scale: 1.1, rotate: "360deg" },
        }}
        className="size-24 rounded-md bg-blue-700"
      ></motion.div>
    </div>
  );
}
