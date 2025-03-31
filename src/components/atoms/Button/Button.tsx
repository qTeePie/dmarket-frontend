// /components/atoms/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  color?: "primary" | "secondary" | "danger"; // Add more if you want
  className?: string;
}

export const Button = ({
  onClick,
  children,
  color = "primary", // default
  className = "",
}: ButtonProps) => {
  const baseStyle = "p-2 rounded-lg text-white";
  const colorStyle =
    color === "primary"
      ? "bg-pink-500"
      : color === "secondary"
      ? "bg-blue-500"
      : "bg-red-600";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${colorStyle} ${className}`}
    >
      {children}
    </button>
  );
};
