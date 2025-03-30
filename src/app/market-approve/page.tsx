"use client";

import { useFetchApprovedMarketplace } from "@/features/approve";
import { useFetchNFT } from "@/features/nft-gallery/logic/useFetchNFT";
import { Button } from "@/components/atoms";
import { ApprovedInfo } from "@/components/molecules";
import { ApproveSection } from "@/features/";
import { useTestEffect } from "@/hooks/test";
import { ConnectWalletSection } from "@/features/";

export default function Home() {
  const { approved, loading } = useFetchApprovedMarketplace(
    "0x0ff833129533546d96a5847c22b57aacccd00fd5",
    0
  );
  const { count, increment } = useTestEffect();

  return (
    <main>
      <h1>NFT Approved Marketplace:</h1>
      <ApprovedInfo approved={approved} loading={loading} />
      <ApproveSection tokenId={0} />
      <ConnectWalletSection />
      <Button onClick={increment}>Herregud</Button>
    </main>
  );
}
