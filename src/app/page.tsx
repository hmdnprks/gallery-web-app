"use client";

import Gallery from "@presentation/features/Gallery/Gallery";
import BottomNavigation from "@presentation/ui/BottomNav/BottomNav";
import { useRef } from "react";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-screen bg-white">
      <main
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-2 py-2 bg-white pt-0"
      >
        <Gallery scrollRef={scrollRef} />
      </main>

      <BottomNavigation />
    </div>
  );
}
