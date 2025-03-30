"use client";

import { useEffect, useState } from "react";
import { fetchNFT } from "@/lib/blockchain/nft";

// Define the NFT type
type NFT = {
  title: string;
  image: string;
  price: string | undefined;
};

export const useFetchNFT = (nftAddress: string, tokenId: number) => {
  const [loading, setLoading] = useState(true);
  const [nft, setNft] = useState<NFT | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchNFT(nftAddress, tokenId);
        console.log(res);
        setNft(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [nftAddress, tokenId]);

  return { nft, loading };
};
