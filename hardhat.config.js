require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

module.exports = {
    networks: {
      nova: {
        url: "https://nova-0.gemini-3h.subspace.network/ws",
        accounts: [process.env.PRIVATE_KEY],
        chainId: 490000,
      }
    },
    solidity: "0.5.16",
    etherscan: {
        apiKey: {
          nova: ` `,
        },
        customChains: [
          {
            network: 'nova',
            chainId: 490000,
            urls: {
              apiURL: 'https://nova.gemini-3h.subspace.network/api',
              browserURL: 'https://nova.gemini-3h.subspace.network/',
            },
          },
        ],
      },
  };
  