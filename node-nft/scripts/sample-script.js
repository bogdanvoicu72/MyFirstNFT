const hre = require("hardhat")

async function main(){
  const AllSame = await hre.ethers.getContractFactory("AllSame");
  const allSame = await AllSame.deploy();

  await allSame.deployed();

  console.log("My nft deployed to:", allSame.addres);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });