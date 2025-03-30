"use client";

import { useFetchNFT } from "../";
import { GalleryItem } from "@/components";
import Link from "next/link";

export const NFTGallery = () => {
  const { nft, loading } = useFetchNFT(
    process.env.NEXT_PUBLIC_DNFT_CONTRACT!,
    0
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-white">✨ Featured NFT ✨</h2>

      {loading || !nft ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <Link
              key={index}
              href={`/nft/${nft.contract}/${index}`} // dynamic contract & tokenId
            >
              <GalleryItem
                title={nft.title} // changed from title → name
                image={nft.image}
                price={nft.price ?? ""}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
