"use client";

import { useEffect, useState } from "react";
import { Button, Input } from "@/components";
import { useApproveMarketplace } from "../logic/useApproveMarketplace";
import { listNFT } from "@/lib/blockchain/write";

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
          onClick={handleApproveMarketplace}
          disabled={isLoading || isApproved == true}
        >
          {isLoading ? "Approving..." : "Approve Marketplace"}
        </Button>
        <Button
          onClick={() => {
            listNFT(nftAddress, Number(tokenId), Number(price));
          }}
          disabled={isLoading || isApproved == false}
        >
          {isLoading ? "..." : "List NFT"}
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
