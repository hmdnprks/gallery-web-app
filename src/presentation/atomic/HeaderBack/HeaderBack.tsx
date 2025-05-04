"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function HeaderBack({ title }: { title: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        onClick={() => router.back()}
        className="p-2 -ml-2"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
}
