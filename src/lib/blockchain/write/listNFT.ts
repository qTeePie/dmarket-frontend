// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import { getBrowserProvider } from "@/lib/blockchain/browserProvider";
import { NFT } from "@/types/nft";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

// DMrkt address
const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE;
