import { useState, useEffect } from "react";
import { approveMarketplace } from "@/lib/blockchain/write";
import { listNFT } from "@/lib/blockchain/write";
import { fetchApprovedMarketplace } from "@/lib/blockchain/read";
import { NFTListing } from "@/types/nft";

const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

// TokenID and NFTAddress is passed to the function
// Marketplace address already defined as env variable
export const useApproveAndListNFT = (
  nftAddress: string,
  tokenId: number,
  price: number
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isApproved, setApproved] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [nftListing, setNftListing] = useState<NFTListing>();

  const handleApproveMarketplace = async () => {
    if (!addrMarketplace) throw new Error("Marketplace address is not defined");
    setIsLoading(true);
    try {
      // Ask for approval
      const res = await approveMarketplace(nftAddress, tokenId);
      console.log(res);
      const approvedMarketplace = await fetchApprovedMarketplace(
        nftAddress,
        tokenId
      );

      const approved = approvedMarketplace === addrMarketplace;
      setApproved(approved);

      if (approved) {
        // ListNFT at marketplace if approced
        const tx = await listNFT(nftAddress, tokenId, price);
        console.log(tx);
      }
    } catch (err) {
      setError(err as Error);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isApproved,
    handleApproveMarketplace,
  };
};
