import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);

export default provider;
