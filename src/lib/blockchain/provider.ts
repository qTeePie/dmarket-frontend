import { ethers } from "ethers";

// Read-only provider
export const provider = new ethers.JsonRpcProvider(
  process.env.REACT_APP_RPC_URL
);
