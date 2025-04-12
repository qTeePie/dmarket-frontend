"use client";

import { useState } from "react";
import { Button, Input } from "@/components";
import { useApproveMarketplace } from "../logic/useApproveMarketplace";
import { useListNFT } from "../logic/useListNFT";
import { useWallet } from "@/context/WalletContext";

export const NFTListing = () => {
  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  const { account } = useWallet();
  const { handleApproveMarketplace, isApproving, isApproved } =
    useApproveMarketplace();
  const { handleListNFT, isListing, error } = useListNFT();

  const isBusy = isApproving || isListing;

  // 🛑 No wallet? Don't render the form at all
  if (!account) {
    return (
      <div className="p-6 text-center">
        <p className="text-sm text-red-500">
          ❌ Connect your wallet to list an NFT.
        </p>
        <p>Wallet: {account ?? "Not connected"}</p>
      </div>
    );
  }

  // ✅ Wallet connected? Show the whole UI
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">List Your NFT</h1>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        <Input
          value={nftAddress}
          onChange={(e) => setNftAddress(e.target.value)}
          placeholder="NFT Contract Address"
        />
        <Input
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          placeholder="Token ID"
        />
        <Input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price in ETH"
        />

        <Button
          onClick={() => handleApproveMarketplace(nftAddress, Number(tokenId))}
          disabled={isBusy || isApproved}
        >
          {isApproving ? "Approving..." : "Approve Marketplace"}
        </Button>

        <Button
          onClick={() =>
            handleListNFT(nftAddress, account, Number(tokenId), Number(price))
          }
          disabled={isBusy || !isApproved}
        >
          {isListing ? "Listing..." : "List NFT"}
        </Button>

        {/* 💅 Feedback messages */}
        {isApproving && (
          <p className="text-sm text-gray-500">⏳ Waiting for approval...</p>
        )}
        {isListing && (
          <p className="text-sm text-blue-500">✨ Listing your NFT...</p>
        )}
        {error && <p className="text-sm text-red-500">❌ {error.message}</p>}
        {isApproved && !isApproving && !isListing && (
          <p className="text-sm text-green-600">✅ Marketplace approved!</p>
        )}
      </div>
    </div>
  );
};
