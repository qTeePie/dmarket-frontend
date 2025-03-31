"use client";

import { useState } from "react";
import { ethers } from "ethers";

export const NFTListing = () => {
  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-4 p-6">
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
        <button className="bg-blue-600 text-white p-2 rounded">List NFT</button>
      </div>
    </div>
  );
};
