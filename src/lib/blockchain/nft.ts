// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import provider from "./provider";
import { log } from "console";

// Minimal ERC721 ABI
const ERC721_ABI = [
  "function getApproved(uint256 tokenId) view returns (address)",
  "function ownerOf(uint256 tokenId) view returns (address)",
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

export async function fetchNFT(nftAddress: string, tokenId: number) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const tokenURI = await contract.tokenURI(tokenId);

  console.log(tokenURI);

  // Decode base64
  const base64 = tokenURI.replace("data:application/json;base64,", "");
  const json = JSON.parse(atob(base64));

  const nft = {
    title: json.name,
    image: json.animation_url ?? json.image, // if animation_url exists, use it
    price: undefined, // You don't store price on-chain
  };

  return nft;
}

export async function fetchNFTOwner(nftAddress: string, tokenId: number) {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const owner = await contract.ownerOf(tokenId);
  return owner;
}
