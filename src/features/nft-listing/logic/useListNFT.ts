import { useState } from "react";
import { listNFT } from "@/lib/blockchain/write";
import { fetchIsListed } from "@/lib/blockchain/read/fetchIsListed";

export const useListNFT = ({
  setTxError,
  setTxLoading,
}: {
  setTxError: (err: Error | null) => void;
  setTxLoading: (loading: boolean) => void;
}) => {
  const handleListNFT = async (
    nftAddress: string,
    account: string,
    tokenId: number,
    price: number
  ) => {
    try {
      setTxLoading(true);
      setTxError(null); // clear last error

      // Check if already listed
      const alreadyListed = await fetchIsListed(nftAddress, account, tokenId);

      if (alreadyListed) {
        throw new Error("NFT is already listed.");
      }

      // 🚀 List the NFT
      await listNFT(nftAddress, tokenId, price);
    } catch (err) {
      setTxError(err as Error);
      console.error("ListNFT error:", err);
    } finally {
      setTxLoading(false);
    }
  };

  return {
    handleListNFT,
  };
};
