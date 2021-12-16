import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    console.log(counter.address);

    return counter;
}

async function count(counter) {
    await counter.count();
    console.log("Counter", await counter.getCounter());
}

deploy().then(count);

