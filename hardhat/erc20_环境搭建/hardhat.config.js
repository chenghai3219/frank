require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
//require("@nomiclabs/hardhat-etherscan");
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
setGlobalDispatcher(proxyAgent);


const PRIVATE_KEY="08822eebe7469ccccc2ad599571d1d910e3abde4add370281f82592cec831af3";

const ETHER_API_URL="https://sepolia.infura.io/v3/10a60897e4cf416e89572788dcd0cb5e";
const ETHERSCAN_API_KEY="I1WBK1JHB63P74DMYUTY62ZY1YJ18QPNG5";


const BSC_API_URL="https://bsc-testnet.infura.io/v3/10a60897e4cf416e89572788dcd0cb5e";
//const BNBSCAN_API_KEY="Y2HVWJTYE5DDE83WXUA7B72UVAGTIGGV37";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    //infura官网： https://infura.io/
    //领水地址 : https://goerlifaucet.com/

    bnb: {
      url: BSC_API_URL,
      accounts: [PRIVATE_KEY]
    },

    sepolia: {
      url: ETHER_API_URL,
      accounts: [PRIVATE_KEY]
    },

    etherscan:{apiKey:ETHERSCAN_API_KEY}

    // etherscan: {
    //   apiKey: {
    //     // avalancheFujiTestnet: "",
    //     // bscTestnet: "",
    //     // moonbaseAlpha: "",
    //     // goerli: "",
    //     sepolia:ETHERSCAN_API_KEY,
    //   },
    // },


  }
};
