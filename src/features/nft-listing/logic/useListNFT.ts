"use client";

import { useState } from "react";
import { listNFT } from "@/lib/blockchain/write";
import { fetchIsListed } from "@/lib/blockchain/read/fetchIsListed";

export const useListNFT = () => {
  const [isListing, setIsListing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleListNFT = async (
    nftAddress: string,
    account: string,
    tokenId: number,
    price: number
  ) => {
    try {
      setIsListing(true);
      setError(null); // clear last error

      // Check if already listed
      const alreadyListed = await fetchIsListed(nftAddress, account, tokenId);

      if (alreadyListed) {
        throw new Error("NFT is already listed.");
      }

      // 🚀 List the NFT
      await listNFT(nftAddress, tokenId, price);
    } catch (err) {
      setError(err as Error);
      console.error("ListNFT error:", err);
    } finally {
      setIsListing(false);
    }
  };

  return {
    isListing,
    handleListNFT,
    error,
  };
};
