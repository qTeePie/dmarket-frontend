"use client";

import { useConnectWallet } from "../";

export const ConnectWalletSection = () => {
  const { account, connect } = useConnectWallet();

  return (
    <div className="flex items-center">
      {account ? (
        <p className="text-sm text-neutral-400">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connect}
          className="px-4 py-2 bg-neutral-800 text-white rounded-xl border border-neutral-700 hover:bg-neutral-700 transition"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
