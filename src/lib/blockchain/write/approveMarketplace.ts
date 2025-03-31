// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import { getBrowserProvider } from "@/lib/blockchain/browserProvider";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

// DMrkt address
const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

export const approveMarketplace = async (
  nftAddress: string,
  tokenId: number
) => {
  const provider = getBrowserProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(nftAddress, ERC721_ABI, signer);

  const tx = await contract.approve(addrMarketplace, tokenId);
  await tx.wait();
  return tx;
};
