"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components";
import { approveMarketplace } from "@/lib/blockchain/write";

export const NFTListing = () => {
  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

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
        <Button onClick={() => approveMarketplace(nftAddress, Number(tokenId))}>
          Approve Marketplace
        </Button>
      </div>
    </div>
  );
};
