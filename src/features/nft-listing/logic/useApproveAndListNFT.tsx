import { useState, useEffect } from "react";
import { approveMarketplace, listNFT } from "@/lib/blockchain/write";
import { fetchApprovedMarketplace } from "@/lib/blockchain/read";
import { NFTListing } from "@/types/nft";

const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

export const useApproveAndListNFT = (
  nftAddress: string,
  tokenId: number,
  price: number
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isApproved, setApproved] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [nftListing, setNftListing] = useState<NFTListing | null>(null);

  // Check approval status when hook mounts
  useEffect(() => {
    const checkApproval = async () => {
      try {
        if (!addrMarketplace)
          throw new Error("Marketplace address not defined");
        const approvedMarketplace = await fetchApprovedMarketplace(
          nftAddress,
          tokenId
        );
        setApproved(approvedMarketplace === addrMarketplace);
      } catch (err) {
        setError(err as Error);
      }
    };
    checkApproval();
  }, [nftAddress, tokenId]);

  const handleApproveMarketplace = async () => {
    setIsLoading(true);
    try {
      await approveMarketplace(nftAddress, tokenId);
      setApproved(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleListNFT = async () => {
    setIsLoading(true);
    try {
      const tx = await listNFT(nftAddress, tokenId, price);
      setNftListing(tx);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isApproved,
    error,
    nftListing,
    handleApproveMarketplace,
    handleListNFT,
  };
};
