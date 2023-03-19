/* Por ejemplo, en un script de Hardhat, se podría utilizar la biblioteca ethers.js 
para interactuar con la red de Ethereum, como enviar transacciones, desplegar contratos,
obtener información de bloques, entre otras operaciones. */

const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
