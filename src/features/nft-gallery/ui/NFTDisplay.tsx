// /features/nft-page/ui/NFTDisplay.tsx

"use client"; // You can keep this if you want interactivity (Buy button, etc.)

import { GalleryItem } from "@/components";
import { NFT } from "@/types/nft";

type Props = {
  nft: NFT;
  collectionName: string;
};

export const NFTDisplay = ({ nft, collectionName }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-10">
      <h1 className="text-3xl font-bold text-white">✨ {collectionName} ✨</h1>

      <GalleryItem
        title={nft.title}
        image={nft.image}
        price={nft.price ?? ""}
      />

      <button className="mt-6 px-6 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-800 hover:text-white transition duration-300 shadow-md">
        Buy Now
      </button>

      <p className="text-neutral-400 text-sm mt-4">
        Contract: <span className="font-mono">{nft.contract}</span> | Token:{" "}
        {nft.tokenId}
      </p>
    </section>
  );
};
