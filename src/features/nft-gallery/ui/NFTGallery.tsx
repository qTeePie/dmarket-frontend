"use client";

import { useFetchNFT } from "../";
import { GalleryItem } from "@/components";

// Define the NFT type
type NFT = {
  title: string;
  image: string;
  price: string | undefined;
};

export const NFTGallery = () => {
  const { nft, loading } = useFetchNFT(
    "0xa86582Ad5E80abc19F95f8A9Fb3905Cda0dAbd59"!,
    0
  );

  if (loading || !nft) return <div>Loading...</div>;
  return (
    <GalleryItem title={nft.title} image={nft.image} price={nft.price ?? ""} />
  );
};
