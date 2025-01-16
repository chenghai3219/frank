# frank
使用hardhat搭建标准erc20合约开发框架：1，使用npm作为项目的包管理工具
                                    2，
工程项目快速搭建
第一步：
npm init 命令初始化项目，完成npm能够管理项目，这个时候会生成一个package.jion文件

第二步：
1.参考hardhat官方网站快速搭建项目  hardhat官方网站地址：https://hardhat.org/hardhat-runner/docs/getting-started#overview
2.使用本地安装的Hardhat  使用命令：npm install --save-dev hardhat  当执行npm install这个命令的时候会检测当前项目下是否有package-lock.jion文件，当然新构建的项目肯定没有，这个时候会生成这个文件

第三步：
1.使用npx hardhat init 初始化hardhat项目 这个时候会生成一个标准的solidity合约模板工程，给我们生成相应的文件目录和文件



工程项目编译，测试，部署，验证
编译：
1.npx hardhat compile  第一次编译会自动下载solidity对应版本的编译器
2.编写标准erc20协议智能合约， 需要使用npm install  @openzeppelin/contracts  命令下载openzeppelin工具库

测试:

部署:
 1.部署到hardhat内置的网络，不能查看合约信息，部署完就销毁了
 2.带有构造参数的合约，定义一个参数脚本
 npx hardhat run .\scripts\deploy.js

npx hardhat run ./scripts/deploy.js --network sepolia
部署到sepolia测试网络后的合约地址：0xDf1D4AFE1eE4b05BA9F01F09fF96254Bd22335Bb   0xAB39b852cD268eD3a4f125305eB2E28EafC5bF89   0xb3fB0918093973D9868FA037FF3aF456DD69EbCC

部署到bsc测试网络后的合约地址： 0x31c842d9C0dA93D1d5c6aF3B4317b096c0f995Ec

验证：
//npx hardhat verify --network sepolia --constructor-args ./scripts/arguments.js 0xDf1D4AFE1eE4b05BA9F01F09fF96254Bd22335Bb



npx hardhat run ./scripts/deploy.js --network bnb
问题处理  
1. hardhat在本地部署智能合约时，执行命令npx hardhat run .\scripts\deploy.js 时成功了
在bnb测试网时，执行npx hardhat run ./scripts/deploy.js --network bnb时失败了;报以下错误：ProviderError: too many arguments, want at most 1
执行的部署脚本 const args = require("../scripts/arguments.js"); 
     const deployedContract = await contracts.deploy(...args);
合约构造参数放在了arguments.js里面

2
问题：
hardhat框架初始化合约模版项目时自动引入了@nomicfoundation/hardhat-toolbox，详细说一下这个包的作用
引入@nomicfoundation/hardhat-toolbox这个包之后，编译，测试，部署，验证还需要引入其它包吗？
如果需要详细的列举出各自需要安装哪个包？

chatGDP回答：
@nomicfoundation/hardhat-toolbox 是一个集合包，旨在为 Hardhat 用户提供一系列常用工具和插件，以便于在 Ethereum 和其他 EVM 兼容的区块链上进行开发。这个包将多个常用的 Hardhat 插件整合在一起，简化了项目的设置和管理。

@nomicfoundation/hardhat-toolbox 的作用
集成多个插件：hardhat-toolbox 集成了多种常用的插件，包括但不限于：

Hardhat Ethers：提供与 Ethers.js 的集成，方便与智能合约进行交互。
Hardhat Waffle：用于编写和运行测试的工具。
Hardhat Deploy：用于部署合约的工具。
Hardhat Gas Reporter：用于报告合约的 gas 消耗。
简化配置：通过引入这个包，你可以减少单独安装和配置多个插件的复杂性。

提供开发工具：包含了开发、测试和部署智能合约所需的基本工具，使得开发者能够快速上手。

引入 @nomicfoundation/hardhat-toolbox 后的需求
引入 @nomicfoundation/hardhat-toolbox 后，通常情况下，你可以完成编译、测试、部署和验证而不需要额外安装其他插件，因为它已经包含了大多数常用功能。但是，具体需求可能会因项目的不同而有所变化。




