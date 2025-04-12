import { ethers } from "ethers";
import { provider } from "@/lib/blockchain/provider";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

export const fetchIsListed = async (
  nftAddress: string,
  listerAddress: string,
  tokenId: number
) => {
  if (!addrMarketplace) throw new Error("Marketplace address is not defined");

  const contract = new ethers.Contract(addrMarketplace, ERC721_ABI, provider);
  const isListed = await contract.isListed(nftAddress, tokenId, listerAddress);

  return isListed;
};
