"use client";

import { Button } from "@/components/atoms";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen mt-24 p-6 gap-16 text-center">
      <div className="flex gap-8 mt-4">
        <Link href="/market-approve" className="w-40">
          <Button className="w-full">List NFT</Button>
        </Link>
        <Link href="/list-nfts" className="w-40">
          <Button className="w-full">Browse NFTs</Button>
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-bold">DMrkt</h1>
        <p className="text-lg max-w-xl">
          The minimal, on-chain NFT marketplace where creators control their
          royalties.
        </p>
      </div>
    </main>
  );
}
