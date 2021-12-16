import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.10",
    networks: {
        hardhat: {
            chainId: 1337
        },
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [`${process.env.RINKEBY_KEY}`],
        }
    }
};
