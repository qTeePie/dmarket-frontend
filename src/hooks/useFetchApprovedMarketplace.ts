import { useEffect, useState } from "react";
import { fetchApprovedMarketplace } from "@/lib/blockchain/nft";

export function useFetchApprovedMarketplace(
  nftAddress: string,
  tokenId: number
) {
  const [approved, setApproved] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await fetchApprovedMarketplace(nftAddress, tokenId);
        setApproved(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [nftAddress, tokenId]);

  return { approved, loading };
}
