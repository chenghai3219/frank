# frank
使用hardhat搭建标准erc20合约开发框架：1，使用npm作为项目的包管理工具
                                    2，

第一步：
npm init 命令初始化项目，完成npm能够管理项目，这个时候会生成一个package.jion文件

第二步：
1.参考hardhat官方网站快速搭建项目  hardhat官方网站地址：https://hardhat.org/hardhat-runner/docs/getting-started#overview
2.使用本地安装的Hardhat  使用命令：npm install --save-dev hardhat  当执行npm install这个命令的时候会检测当前项目下是否有package-lock.jion文件，当然新构建的项目肯定没有，这个时候会生成这个文件

第三步：
1.使用npx hardhat init 初始化hardhat项目 这个时候会生成一个标准的solidity合约模板工程，给我们生成相应的文件目录和文件

第四步：
1，这个时候我们就可以开始编译，测试，部署，验证我们的合约了

