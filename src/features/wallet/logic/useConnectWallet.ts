"use client";

import { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useConnectWallet() {
  const [account, setAccount] = useState<string | null>(null);

  const connect = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("No wallet found 🚫");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

  return { account, connect };
}
