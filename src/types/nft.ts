// /types/nft.ts

export type NFTListing = {
  title: string;
  image: string;
  price: string | undefined;
  contract: string;
  tokenId: number;
};
