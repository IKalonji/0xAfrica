export interface IChains {
    name: string,
    logo: string,
    chainID: string,
    contracts?: {
        dex: string,
        oracle: string,
        franc: string,
        rand: string,
        pound: string,
        naira: string
    }
}

export const chains : IChains[] = [
    {
        name: "Binance Smart Chain",
        logo: "//logo.chainbit.xyz/bnb",
        chainID: "97",
        contracts: {
            dex: "0xdd7a3Fb3dAaEf50e1F693A5c780c784De0eD7fE6",
            oracle: "0xaF52Fe8cb0745063Dfc8771929440e2F976a73C4",
            franc: "0x0b151F2FF97dbC64360dA9CECf918b3bd2D81719",
            rand: "0x3b1de2c7FCaA51C9366113C1462ecd18A5967939",
            pound: "0x5D4DdE4977A53bCA42Fe16D050aBD879a2402720",
            naira: "0xe2d8b313d251C264620Cde34DeD052251f45aD1A"
        }
    },
    {
        name: "Fantom",
        logo: "//logo.chainbit.xyz/ftm",
        chainID: "4002",
        contracts: {
            dex: "0xdd7a3Fb3dAaEf50e1F693A5c780c784De0eD7fE6",
            oracle: "0xaF52Fe8cb0745063Dfc8771929440e2F976a73C4",
            franc: "0xe2d8b313d251C264620Cde34DeD052251f45aD1A",
            rand: "0x3b1de2c7FCaA51C9366113C1462ecd18A5967939",
            pound: "0x0b151F2FF97dbC64360dA9CECf918b3bd2D81719",
            naira: "0x5D4DdE4977A53bCA42Fe16D050aBD879a2402720"
        }
    },
    {
        name: "Polygon",
        logo: "//logo.chainbit.xyz/matic",
        chainID: "80001",
        contracts: {
            dex: "0xdd7a3Fb3dAaEf50e1F693A5c780c784De0eD7fE6",
            oracle: "0xaF52Fe8cb0745063Dfc8771929440e2F976a73C4",
            franc: "0x0b151F2FF97dbC64360dA9CECf918b3bd2D81719",
            rand: "0x3b1de2c7FCaA51C9366113C1462ecd18A5967939",
            pound: "0x5D4DdE4977A53bCA42Fe16D050aBD879a2402720",
            naira: "0xe2d8b313d251C264620Cde34DeD052251f45aD1A"
        }
    },
    {
        name: "Tron",
        logo: "//logo.chainbit.xyz/trx",
        chainID: "",
        contracts: {
            dex: "TVm22VuHmhxAuxN9f1LfpmrJTWS8aAYG9R",
            oracle: "TK3e9hGPNrsJzCV3d8H8vkiN6QLmCJM4a9",
            franc: "Coming soon",
            rand: "Coming soon",
            pound: "Coming soon",
            naira: "Coming soon"
        }
    }
]