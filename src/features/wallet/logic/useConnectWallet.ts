// hooks/useConnectWallet.ts
"use client";

import { useWallet } from "@/context/WalletContext"; // use your actual path

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useConnectWallet() {
  const { account, setAccount } = useWallet();

  const connect = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("No wallet found 😭");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]); // ✅ updates the global context!
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

  return { account, connect };
}
