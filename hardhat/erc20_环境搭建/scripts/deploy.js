const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  // 编译所有合约
  console.log('contracts compile starting....');
  const contracts = await ethers.getContractFactory("StableCoin");

  // 部署合约
  console.log('contracts deploy starting....');

  const args = require("../scripts/arguments.js"); // 导入参数列表
  const deployedContract = await contracts.deploy(...args);
  console.log('Contract deployed to:', deployedContract.target);

  // 等待合约部署完成

  await deployedContract.waitForDeployment();
  //await deployedContract.deployed();

  // 如果需要的话，可以在这里执行一些合约的初始化函数
  // await deployedContract.initialize();

  console.log('Contract deployed successfully!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
