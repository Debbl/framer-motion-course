"use client";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Link href="/basic">basic</Link>
      <Link href="/gestures">gestures</Link>
    </main>
  );
}
