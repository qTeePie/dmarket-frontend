// components/atoms/Button/Button.tsx
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  hoverColor?: string;
};

export const Button = ({
  children,
  hoverColor = "hover:bg-purple-500",
  ...props
}: Props) => {
  return (
    <button className={clsx(styles.button, hoverColor)} {...props}>
      {children}
    </button>
  );
};
