# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Ether.js + hardhat

## ethers.js

https://docs.ethers.io/v5/

ethers.js库旨在为以太坊区块链及其生态系统提供一个小而完整的 JavaScript API 库

对比使用 web3.js 代码量更少，接口也更简洁，推荐优先使用 ethers.js

## hardhat

https://hardhat.org/getting-started/

Hardhat是一个编译、部署、测试和调试以太坊应用的开发环境。

它可以帮助开发人员管理和自动化构建智能合约和dApps过程中固有的重复性任务，并围绕这一工作流程轻松引入更多功能。

这意味着hardhat在最核心的地方是编译、运行和测试智能合约



1. 创建hardhat项目：https://hardhat.org/guides/project-setup.html
2. 添加typescript支持：https://hardhat.org/guides/typescript.html
3. 引入typechain：https://www.npmjs.com/package/@typechain/hardhat
4. 编译合约 ：yarn compile
   1. 合约信息保存在artifacts目录下
   2. 生成的类型信息保存在typechain-types目录下
5. 执行script： yarn test

