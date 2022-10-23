import { ethers } from "hardhat";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

async function main() {

    const contractAddress = "0xe0943B596E5180e09C78c0daE8fF2a89F877dc2c";
    console.log("Getting ballot contract with address: " + contractAddress);
    
    const ballotFactory = await ethers.getContractFactory("Ballot");
    const ballotContract  = ballotFactory.attach(contractAddress);
    
    const chairperson = await ballotContract.chairperson();

    console.log({chairperson});

    console.log("And today we can vote on:");

    const proposal0 = await ballotContract.proposals(0);
    const proposal1 = await ballotContract.proposals(1);
    
    console.log("0: " + (ethers.utils.parseBytes32String(proposal0.name)));
    console.log("1: " + (ethers.utils.parseBytes32String(proposal1.name)));

    const options = {
        alchemy: process.env.ALCHEMY_API_KEY,
        infura: process.env.INFURA_API_KEY
    }

    let providers = ethers.providers.getDefaultProvider("goerli", options)

    let signer = new ethers.Wallet(process.env.PRIVATE_KEY_SECOND!, providers)

    const address = await signer.getAddress();

    console.log(address);

    const balance = await signer.getBalance();

    console.log(balance);

    const tx = await ballotContract.connect(signer).vote(1);
    tx.wait()

    console.log(tx);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});