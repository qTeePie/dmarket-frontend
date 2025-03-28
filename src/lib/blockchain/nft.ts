// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import provider from "./provider";

// Minimal ERC721 ABI
const ERC721_ABI = [
  "function getApproved(uint256 tokenId) view returns (address)",
  "function ownerOf(uint256 tokenId) view returns (address)",
];

export async function fetchApprovedMarketplace(
  nftAddress: string,
  tokenId: number
) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const approved = await contract.getApproved(tokenId);
  return approved;
}

export async function getNFTOwner(nftAddress: string, tokenId: number) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const owner = await contract.ownerOf(tokenId);
  return owner;
}
