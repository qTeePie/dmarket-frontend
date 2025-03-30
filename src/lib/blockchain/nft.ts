// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import provider from "./provider";
import { NFT } from "@/types/nft";

// Minimal ERC721 ABI
const ERC721_ABI = [
  "function getApproved(uint256 tokenId) view returns (address)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function name() view returns (string memory)",
  "function tokenURI(uint256 tokenId) view returns (string memory)",
];

export async function fetchApprovedMarketplace(
  nftAddress: string,
  tokenId: number
) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const approved = await contract.getApproved(tokenId);
  return approved;
}

export async function fetchNFT(
  nftAddress: string,
  tokenId: number
): Promise<NFT> {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const tokenURI = await contract.tokenURI(tokenId);

  // Decode base64
  const base64 = tokenURI.replace("data:application/json;base64,", "");
  const json = JSON.parse(atob(base64));

  const nft: NFT = {
    title: json.name,
    image: json.image.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_PREFIX!),
    price: undefined, // You don't store price on-chain
    contract: nftAddress,
    tokenId,
  };

  return nft;
}

export async function fetchNFTOwner(nftAddress: string, tokenId: number) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const owner = await contract.ownerOf(tokenId);
  return owner;
}

export async function fetchCollectionName(nftAddress: string) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const name = await contract.name();
  return name;
}
