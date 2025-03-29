"use client";

import { useConnectWallet } from "../";

export function ConnectWalletSection() {
  const { account, connect } = useConnectWallet();

  return (
    <div className="p-4 border rounded-xl bg-black text-white">
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}
