"use client";
import { useAnimate } from "framer-motion";

export default function AnimationControls() {
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
    animate(scope.current, {
      scale: 1.1,
      rotate: "360deg",
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    animate(scope.current, {
      scale: 1,
      rotate: "0deg",
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        onClick={() => handleClick()}
        className="my-2 rounded-md border px-2 py-1"
      >
        Flip it
      </button>

      <div ref={scope} className="size-24 rounded-md bg-blue-700"></div>
    </div>
  );
}
