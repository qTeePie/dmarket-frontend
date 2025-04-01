"use client";

import { useEffect, useState } from "react";
import { fetchNFT } from "@/lib/blockchain/read";
import { NFTListing } from "@/types/nft";

export const useFetchNFT = (nftAddress: string, tokenId: number) => {
  const [loading, setLoading] = useState(true);
  const [nft, setNft] = useState<NFTListing | null>(null);

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
