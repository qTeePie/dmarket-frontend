"use client";

import { useState } from "react";
import { ethers } from "ethers";

export function ApproveSection({ tokenId }: { tokenId: number }) {
  const [marketplace, setMarketplace] = useState("");

  async function handleClick() {
    if (!marketplace) {
      alert("Please enter marketplace address");
      return;
    }
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_DNFT_CONTRACT!,
      ["function approveMarketplace(address,uint256)"],
      signer
    );
    await contract.approveMarketplace(marketplace, tokenId);
    alert(`Marketplace ${marketplace} approved!`);
  }

  return (
    <div>
      <input
        value={marketplace}
        onChange={(e) => setMarketplace(e.target.value)}
        placeholder="0x123..."
      />
      <button onClick={handleClick}>Approve Marketplace</button>
    </div>
  );
}
