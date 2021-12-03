import { ethers } from "hardhat";
import { utils } from "ethers";
import { Cash } from "../typechain-types/Cash";

(async () => {
  let [signer] = await ethers.getSigners();
  const provider = ethers.provider;
  let cashFactory = await ethers.getContractFactory("Cash");
  let cash = (await cashFactory.connect(signer).deploy()) as Cash;
  let bal = await cash.balanceOf(signer.address);
  console.log("bal", utils.formatEther(bal));
})();
