type Props = {
  title: string;
  image: string;
  price?: string;
};

export const GalleryItem = ({ title, image, price }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-xl border border-neutral-700 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover rounded-t-2xl transition duration-300 group-hover:scale-105"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
          {title}
        </h3>

        {price && (
          <p className="text-sm text-purple-400 font-mono">
            {price} <span className="opacity-60">ETH</span>
          </p>
        )}
      </div>

      {/* Little glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-purple-500 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
    </div>
  );
};
