// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import { provider } from "@/lib/blockchain/provider";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";
import { NFT } from "@/types/nft";

// DMrkt address
const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE;

export const fetchNFTOwner = async (nftAddress: string, tokenId: number) => {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const owner = await contract.ownerOf(tokenId);
  return owner;
};

export const fetchNFT = async (
  nftAddress: string,
  tokenId: number
): Promise<NFT> => {
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
};

export const fetchCollectionName = async (nftAddress: string) => {
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, provider);
  const name = await contract.name();
  return name;
};
