"use client";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button className="my-2" onClick={() => setIsVisible(!isVisible)}>
        show/hidden
      </button>

      {isVisible && <div className="size-24 bg-blue-600"></div>}
    </div>
  );
}
