// /components/atoms/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  const baseStyle =
    "p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white";

  return (
    <button onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};
