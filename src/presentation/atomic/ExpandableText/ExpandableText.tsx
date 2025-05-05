import { useState } from "react";

export default function ExpandableText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.slice(0, 300);

  return (
    <div className="whitespace-pre-wrap">
      {expanded ? text : preview + (text.length > 300 ? "..." : "")}
      {text.length > 300 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-400 ml-1 underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
