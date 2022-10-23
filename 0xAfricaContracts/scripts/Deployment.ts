import { ethers } from "ethers";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

async function main() {
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  PROPOSALS.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  let options = {
    alchemy: process.env.ALCHEMY_API_KEY,
    infura: process.env.INFURA_API_KEY
  }

  const provider = ethers.getDefaultProvider("goerli", options);

  

  // TODO
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});