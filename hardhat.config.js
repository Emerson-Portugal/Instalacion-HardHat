/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Traer la infomacion de .env
// console.log(process.env) remove this after you've confirmed it is working

const { API_URL, PRIVATE_KEY, MATIC_URL } = process.env;

module.exports = {
  solidity: "0.8.18",
  //configurar la red de Polygon
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    // Vamos agregar mas redes
    matic: {
      url: MATIC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
