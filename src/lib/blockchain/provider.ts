// /lib/blockchain/provider.ts
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY"
  // Or Anvil, Alchemy, whatever RPC
);

export default provider;
