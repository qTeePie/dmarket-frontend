"use client";

import { useState } from "react";
import { Button, Input } from "@/components";
import { useApproveMarketplace } from "../logic/useApproveMarketplace";
import { useListNFT } from "../logic/useListNFT";
import { useWallet } from "@/context/WalletContext";

export const NFTListing = () => {
  const { account } = useWallet();

  const [nftAddress, setNftAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [price, setPrice] = useState("");

  const [txState, setTxState] = useState<{
    isApproving: boolean;
    isListing: boolean;
    error: Error | null;
  }>({
    isApproving: false,
    isListing: false,
    error: null,
  });

  const updateTxState = (
    type: "isApproving" | "isListing" | "error",
    value: boolean | Error | null
  ) => {
    setTxState((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const { isApproved, handleApproveMarketplace } = useApproveMarketplace({
    setTxLoading: (loading) => updateTxState("isApproving", loading),
    setTxError: (err) => updateTxState("error", err),
  });

  const { handleListNFT } = useListNFT({
    setTxLoading: (loading) => updateTxState("isListing", loading),
    setTxError: (err) => updateTxState("error", err),
  });

  const isBusy = txState.isApproving || txState.isListing;
  const isValidForm =
    tokenId.length !== 0 && price.length !== 0 && nftAddress.length !== 0;

  if (!account) {
    return (
      <div className="p-6 text-center">
        <p className="text-sm text-red-500">
          ❌ Connect your wallet to list an NFT.
        </p>
      </div>
    );
  }

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
          disabled={isBusy || isApproved || !isValidForm}
        >
          {txState.isApproving ? "Approving..." : "Approve Marketplace"}
        </Button>

        <Button
          onClick={() =>
            handleListNFT(nftAddress, account, Number(tokenId), Number(price))
          }
          disabled={isBusy || !isApproved || !isValidForm}
        >
          {txState.isListing ? "Listing..." : "List NFT"}
        </Button>

        {txState.isApproving && (
          <p className="text-sm text-gray-500">⏳ Waiting for approval...</p>
        )}
        {txState.isListing && (
          <p className="text-sm text-blue-500">✨ Listing your NFT...</p>
        )}
        {txState.error && (
          <p className="text-sm text-red-500">❌ {txState.error?.message}</p>
        )}
        {isApproved && !txState.isApproving && !isBusy && (
          <p className="text-sm text-green-600">✅ Marketplace approved!</p>
        )}
      </div>
    </div>
  );
};
