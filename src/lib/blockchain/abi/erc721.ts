export const ERC721_ABI = [
  "function name() view returns (string memory)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string memory)",
  "function approve(address to, uint256 tokenId) external",
  "function getApproved(uint256 tokenId) view returns (address)",
];
