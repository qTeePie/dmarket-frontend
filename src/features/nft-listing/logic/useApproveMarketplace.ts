import { useEffect, useState } from "react";
import { approveMarketplace } from "@/lib/blockchain/nft";

export const useApproveMarketplace = (nftAddress: string, tokenId: number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await approveMarketplace(nftAddress, tokenId);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [nftAddress, tokenId]);

  return { loading };
};
