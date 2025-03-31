// /app/nft/[contract]/[tokenId]/page.tsx

import { fetchNFT, fetchCollectionName } from "@/lib/blockchain/read";
import { NFTDisplay } from "@/features/nft-gallery";

export default async function NFTPage(props: {
  params: { contract: string; tokenId: string };
}) {
  const { contract, tokenId } = await props.params;

  const [nft, collectionName] = await Promise.all([
    fetchNFT(contract, Number(tokenId)),
    fetchCollectionName(contract),
  ]);

  return <NFTDisplay nft={nft} collectionName={collectionName} />;
}
