type Props = {
  title: string;
  subtitle?: string;
};

export const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="w-full bg-black text-white p-6 border-b border-neutral-800">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm text-neutral-400">{subtitle}</p>}
    </header>
  );
};
