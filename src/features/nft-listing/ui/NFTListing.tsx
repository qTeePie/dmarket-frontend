"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components";
import { useApproveMarketplace } from "../logic/useApproveMarketplace";

export const NFTListing = () => {
  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  const { handleApproveMarketplace, isLoading, isApproved } =
    useApproveMarketplace(nftAddress, Number(tokenId), Number(price));

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">List Your NFT</h1>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        <input
          className="border p-2 rounded"
          placeholder="NFT Contract Address"
          value={nftAddress}
          onChange={(e) => setNftAddress(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Price in ETH"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button onClick={handleApproveMarketplace}>
          {isLoading ? "Approving..." : "Approve Marketplace"}
        </Button>

        {/* 💅 Feedback messages */}
        {isLoading && (
          <p className="text-sm text-gray-500">
            ⏳ Waiting for confirmation...
          </p>
        )}
        {isApproved === false && (
          <p className="text-sm text-red-500">❌ Marketplace not approved</p>
        )}
        {isApproved === true && (
          <p className="text-sm text-green-600">✅ Marketplace approved!</p>
        )}
      </div>
    </div>
  );
};
