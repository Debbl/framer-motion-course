"use client";

import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function ViewBaseAnimations() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          opacity: 1,
          backgroundColor: "rgba(0, 255, 0, 1)",
        },
        {
          duration: 1,
        },
      );
    } else {
      animate(
        scope.current,
        {
          opacity: 0,
          backgroundColor: "rgba(0, 0, 0, 1)",
        },
        {
          duration: 1,
        },
      );
    }
  }, [animate, isInView, scope]);

  return (
    <div>
      <div className="h-[150vh]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          backgroundColor: "rgba(255, 0, 0, 1)",
        }}
        transition={{ duration: 1 }}
        className="h-[150vh] bg-blue-600"
      />
      <div ref={scope} className="h-[150vh] bg-black" />
    </div>
  );
}
