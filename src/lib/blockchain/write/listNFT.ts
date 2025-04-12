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
  if (!addrMarketplace) throw new Error("Marketplace address is not defined");

  const provider = getBrowserProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(addrMarketplace, ERC721_ABI, signer);

  contract.once(
    "NFTListed",
    (listingId, seller, nftContractAddr, tokenId, price) => {
      console.log("🔥 Event fired:");
      console.log("Listing ID:", listingId.toString());
      console.log("Seller:", seller);
      console.log("NFT Contract:", nftContractAddr);
      console.log("Token ID:", tokenId.toString());
      console.log("Price:", ethers.formatEther(price));
    }
  );

  const tx = await contract.listNFT(nftContract, tokenId, price);
  await tx.wait();

  return tx;
};
