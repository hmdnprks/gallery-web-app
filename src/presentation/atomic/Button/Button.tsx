import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-[#7A2E1D] text-white text-sm font-medium px-4 py-2 rounded-full transition disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
