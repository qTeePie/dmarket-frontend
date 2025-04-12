import { fetchIsListed } from "@/lib/blockchain/read/fetchIsListed";
import { listNFT } from "@/lib/blockchain/write/listNFT";

export const listNFTIfNotListed = async (
  nftAddress: string,
  userAddress: string,
  tokenId: number,
  price: number
) => {
  const listed = await fetchIsListed(nftAddress, userAddress, tokenId);
  console.log(listed);
  if (listed) throw new Error("Already listed.");
  return await listNFT(nftAddress, tokenId, price);
};
