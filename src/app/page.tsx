"use client";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Link href="/basic">basic</Link>
      <Link href="/gestures">gestures</Link>
      <Link href="/animation-controls">animation-controls</Link>
      <Link href="/view-base-animations">view-base-animations</Link>
      <Link href="/scroll-animations">scroll-animations</Link>
    </main>
  );
}
