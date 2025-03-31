// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import { provider } from "@/lib/blockchain/provider";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

export const fetchApprovedMarketplace = async (
  nftAddress: string,
  tokenId: number
) => {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const approved = await contract.getApproved(tokenId);
  return approved;
};
