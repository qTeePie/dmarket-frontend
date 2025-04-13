import { useState } from "react";
import { approveMarketplace } from "@/lib/blockchain/write";
import { fetchApprovedMarketplace } from "@/lib/blockchain/read";

const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

export const useApproveMarketplace = ({
  setTxError,
  setTxLoading,
}: {
  setTxError: (err: Error | null) => void;
  setTxLoading: (loading: boolean) => void;
}) => {
  const [isApproved, setApproved] = useState<boolean>(false);

  const handleApproveMarketplace = async (
    nftAddress: string,
    tokenId: number
  ) => {
    if (!addrMarketplace) throw new Error("Marketplace address is not defined");

    setTxLoading(true);
    setTxError(null);

    try {
      const approvedMarketplace = await fetchApprovedMarketplace(
        nftAddress,
        tokenId
      );

      const approved =
        approvedMarketplace.toLowerCase() === addrMarketplace.toLowerCase();

      setApproved(approved);

      if (approved) {
        setTxLoading(false);
        return;
      }

      await approveMarketplace(nftAddress, tokenId);

      const recheck = await fetchApprovedMarketplace(nftAddress, tokenId);
      const finalApproved =
        recheck.toLowerCase() === addrMarketplace.toLowerCase();

      setApproved(finalApproved);
    } catch (err) {
      setTxError(err as Error);
      console.error(err);
    } finally {
      setTxLoading(false);
    }
  };

  return {
    isApproved,
    handleApproveMarketplace,
  };
};
