import { ethers } from "hardhat";
import { utils } from "ethers";
/** typechain 对合约进行类型提示 */
import { Cash } from "../typechain-types/Cash";

(async () => {
  /**
   * hardhat中的ethers是对ethers.js的补充
   * signer是以太坊帐户的抽象，可用于对消息和交易进行签名，并将签名的交易发送到以太坊网络以执行状态更改操作
   * https://docs.ethers.io/v5/api/signer/#signers
   */
  let [signer] = await ethers.getSigners();

  //   const provider = ethers.provider;

  /**
   * 创建合约工厂
   * 通过部署合约的 字节码 以及在 abi 中定义的构造函数来创建合约工厂
   * getContractFactory简化了这一步
   */
  let cashFactory = await ethers.getContractFactory("Cash");

  /**
   * 部署合约
   */
  let cash = (await cashFactory.connect(signer).deploy()) as Cash;
  /**
   * 调用合约方法
   */
  let bal = await cash.balanceOf(signer.address);
  console.log("bal", utils.formatEther(bal));
})();
