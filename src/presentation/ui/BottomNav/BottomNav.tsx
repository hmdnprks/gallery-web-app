"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bookmark } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/saved", label: "Save", icon: <Bookmark size={20} /> },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t bg-[#7A2E1D] text-white flex justify-around py-2 z-10">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-white" : "text-white/60"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>

            {isActive && (
              <span className="absolute bottom-0 w-12 h-0.5 rounded-full bg-white" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
