// /lib/blockchain/nft.ts
import { ethers } from "ethers";
import { getBrowserProvider } from "@/lib/blockchain/browserProvider";
import { ERC721_ABI } from "@/lib/blockchain/abi/erc721";

// DMrkt address
const addrMarketplace = process.env.NEXT_PUBLIC_MARKETPLACE;

/*
    This tx creates a listing object the in dMrkt marketplace contract.
    Will only work if dMrkt has been approved as marketplace for cette NFT.
*/
export const listNFT = async (
  nftContract: string,
  tokenId: number,
  price: number
) => {
  // Get provider
  const provider = getBrowserProvider();
  // Prompt for signature
  const signer = await provider.getSigner();

  if (!addrMarketplace) {
    throw new Error("Marketplace address is not defined");
  }

  // init our contract object
  const contract = new ethers.Contract(addrMarketplace!, ERC721_ABI, signer);
  // send tx, wait for txresponse
  const tx = await contract.listNFT(nftContract, tokenId, price);
  // wait for txreceipt
  await tx.wait();
  return tx;
};
