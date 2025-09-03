import "@nomicfoundation/hardhat-toolbox";

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.28",
  paths: {
    sources: "./backend/contracts",   // folder contracts
    artifacts: "./backend/artifacts"  // folder artifacts
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};

export default config;
