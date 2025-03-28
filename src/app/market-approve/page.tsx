"use client";

import { useFetchApprovedMarketplace } from "@/hooks";
import { ApprovedInfo } from "@/components/molecules";

export default function Home() {
  const { approved, loading } = useFetchApprovedMarketplace("0xNFT", 0);

  return (
    <main>
      <h1>NFT Approved Marketplace:</h1>
      <ApprovedInfo approved={approved} loading={loading} />
    </main>
  );
}
