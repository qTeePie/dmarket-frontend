// /lib/blockchain/nft.ts
import { BrowserProvider, Contract } from "ethers";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

// DMrkt address
const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

export const approveMarketplace = async (
  nftAddress: string,
  tokenId: number
) => {
  if (!window.ethereum) throw new Error("No wallet found");

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new Contract(nftAddress, ERC721_ABI, signer);

  const owner = await contract.ownerOf(BigInt(tokenId));
  const userAddress = await signer.getAddress();

  if (owner.toLowerCase() !== userAddress.toLowerCase()) {
    throw new Error("You are not the owner of this NFT");
  }

  const tx = await contract.approve(addrMarketplace, BigInt(tokenId));
  await tx.wait();

  return tx;
};
