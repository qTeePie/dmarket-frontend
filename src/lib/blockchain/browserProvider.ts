import { ethers } from "ethers";

export const getBrowserProvider = () => {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No wallet found");
  }

  return new ethers.BrowserProvider(window.ethereum);
};
