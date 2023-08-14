
import osmosisArt from "./imagelogos/osmosisart.png";
import osmologo from "./imagelogos/osmologo.png";

// import Cosmoslogoblack from "./imagelogos/cosmos-logo-black.png";
import Cosmoslogowhite from "./imagelogos/cosmos-logo-white.png"
import CosmosATOMLogo from "./imagelogos/brandmark.c15d55f6.png"
import CosmosHubCoverPhoto from "./imagelogos/1_UAcfmRyCxepprYijDr3Mkg.jpeg"

import Celestialogo from "./imagelogos/cel1.png"

const chains = [
    {
        id: 0,
        title: "Cosmos Hub",
        subTitle: "Cosmos Hub",
        est: "Est Mar 2019",
        articleDescription:"The trading Center of IBC, Technology, & Public goods for the Cosmos",
        description: "The Cosmos Hub is an Internet of Blockchains, built to support a network of blockchains able to communicate with each other in a decentralized way.",
        textContent:{
          "Introduction": `Cosmos is a decentralized network of independent parallel blockchains that aims to make it easy for teams to custom-build new blockchains that are highly interoperable with others that share Tendermint consensus. The Cosmos Hub Blockchain, also known as the Cosmos Network, is the main blockchain in the Cosmos ecosystem, serving as the center of the network and recording all activities on it. Several other blockchains are also part of Cosmos, and they are called "Zones" attached to the main blockchain Hub. This article will provide a comprehensive write-up about the Cosmos Hub Blockchain, covering its technical and historical facts, tokenomics, and wallets that support it.`,
          "Hub Technical Facts": ("The Cosmos Hub is built on Tendermint, a consensus engine that uses a Byzantine Fault Tolerance (BFT) algorithm. Tendermint provides a high level of security and reliability to the Cosmos Hub Blockchain, enabling it to process thousands of transactions per second. The Cosmos Hub uses a Proof-of-Stake (PoS) consensus algorithm, where validators stake their ATOM tokens to participate in the consensus process. Validators are responsible for validating transactions and adding blocks to the blockchain. The Cosmos Hub Blockchain has a block time of five seconds, allowing for faster confirmation times and reducing the possibility of double-spending attacks. One of the unique features of the Cosmos Hub Blockchain is its ability to communicate with other blockchains through the Inter-Blockchain Communication (IBC) protocol. IBC allows different blockchains in the Cosmos ecosystem to exchange value and data securely and efficiently. The Cosmos Hub acts as the center of the network, facilitating communication between different blockchains."),
          "Hub History": ("The Cosmose Hub Blockchain was launched in March 2019 after a successful Initial Coin Offering (ICO) that raised $17 million in funding. The Cosmos project was started by Jae Kwon, who is also the CEO of Tendermint, and Ethan Buchman. Since its launch, the Cosmos Hub has seen steady growth in its ecosystem. As of April 2023, there are over 200 projects built on the Cosmos SDK, the main development framework for building blockchains like the Cosmos Hub. These projects include blockchain-based games, decentralized finance (DeFi) applications, and social media platforms."),
          "$ATOM Wallet Support": ("There are several wallets that support ATOM, including Keplr, Cosmostation, Leap, Tabu and Ledger. Keplr is a multi-chain wallet that supports ATOM and other cryptocurrencies on the Cosmos network. Cosmostation is a mobile wallet that allows users to send and receive ATOM and other cryptocurrencies on the Cosmos network. Ledger is a hardware wallet that supports ATOM and other cryptocurrencies, providing users with an extra layer of security for their digital assets."),
          "Conclusion": ("The Cosmos Hub Blockchain is a decentralized network of independent parallel blockchains that allows for highly interoperable custom-built blockchains. The Cosmos Hub Blockchain is built on Tendermint, a consensus engine that provides high security and reliability. One of the unique features of the Cosmos Hub is its ability to communicate with other blockchains in the Cosmos ecosystem through the Inter-Blockchain Communication protocol. The native token of the Cosmos Hub is ATOM, which is used for staking, transaction fees, and as a means of exchange between different blockchains in the Cosmos ecosystem. There are several wallets that support"),
        },
        tags: ["Cosmos Ecosystem", "Infrastucture", "ICS"],
        logoTypeface: Cosmoslogowhite,
        logo: CosmosATOMLogo,
        coverPhoto: CosmosHubCoverPhoto,
        ticker: "ATOM",
        price: 9.89,
        apiPriceLink: "https://api.coingecko.com/api/v3/coins/cosmos/market_chart?vs_currency=usd&days=max&interval=daily",
        mCap: "22B",
        tvl: "$120M",
        website:"https://cosmos.network/",
        twitter: "https://twitter.com/cosmos",
        telegram: "https://t.me/cosmosproject",
        github: "https://github.com/cosmos",
        cssSheet: {
            ":root": {
              "--backgroundHeader": "#1c1e36",
              "--HeaderOutline": "#6f7390",
              "--RocketshipRocket": "white",
              "--RocketshipTypeface": "white",
              "--navbtn": "white",
              "--navbtnOutline": "white",
              "--navbtnborderbottom": "white",
              "--navbtnbackground": "black",
              "--searchbarBackground": "black",
              "--searchInputFontColor": "white",
              "--searchInputBackground": "black",
              "--searchIcon": "white",
              "--menuIcon": "white",
              "--mainbodyBackground": "radial-gradient( #FFF 0%, #9bdbfe 10%, #a4f9ff 15%, #0b3fad 25%, #1c1e36 50%, #000 100%);",
              "--dashboardOutline": "#6f7390",
              "--dashboardFontColor": "white",
              "--dashboardBackground": "#1c1e36",
              "--dashSelectedNavUnderline":"#6f7390",
              "--dashContentOutline": "#6f7390",
              "--dashContentBackground": "#2f3148",
              "--DashboardSubtitleTextColor": "#FFF",
              "--DashboardEstTextColor": "rgba(255, 255, 255, 0.253)",
              "--DashboardTagTextColor": "#FFF",
              "--DashboardTagBackgroundColor": "#0b3fad",
              "--DashboardTagOutlineColor": "#6f7390",
              "--DashboardTokenOverviewDividerColor": "#6f7390",
              "--DashboardTokenStatsNumberColor": "#FFF",
              "--DashboardTokenStatsSubtitleColor": "rgba(255, 255, 255, 0.753)",
              "--DashboardTokenTickerColor": "#fff",
              "--DashboardChartOutlineColor": "#6f7390",
              "--DashboardReadMoreContentTextColor": "#FFF",
              "--DashboardReadMoreTextColor": "#fff",
              "--DashboardReadMoreBackgroundColor": "#1c1e36",
              "--DashboardReadMoreDivTopBorderColor": "#6f7390",
              "--articleBackground": "#1c1e36",
              "--articleOutline": "#6f7390",
              "--articleImageOutline": "#6f7390",
              "--articleDescriptionTextColor": "rgba(255, 255, 255, 0.656)",
              "--articleButtonTextColor": "#000",
              "--articleButtonTextTransitionColor": "#FFF",
              "--articleButtonOutline": "#000",
              "--articleButtonBackground": "#6f7390",
              "--articlePlusIconOutline": "rgb(255, 255, 255)",
              "--dashboardStatBlockBackgroundColor": "#6f7390",
              "--dashboardStatBlockOutlineColor": "#0b3fad",
              "--dashboardChartSettingsButtonOutline": "#6f7390",
              "--dashboardChartSettingsButtonBackground": "#1c1e36",
              "--dashboardChartSettingsSelectedButtonBackground": "#0b3fad",
            }
        },
    },
    {            
      id: 1,
      title: "Osmosis",
      subTitle: "Interchain Liquidity Lab",
      est: "Est June 2021",
      articleDescription: "The Interchain Dex of The Cosmos Ecosystem",
      description: "Swap, Earn, and Build on the leading decentralized Cosmos exchange. The interchain AMM powered by the Cosmos Inter-Blockchain Communication protocol.",
      textContent:{
        "Introduction": `Osmosis is a sovereign blockchain which functions as an Automated Market Maker Decentralized Exchange, or AMM DEX. It's built on the Cosmos SDK, a software development kit designed for creating application-specific blockchains known as Appchains, such as Osmosis. As a DEX, Osmosis specializes in DeFi in the Cosmos ecosystem, providing an interoperable cross-chain trading experience. With a focus on user experience & deep liquidity, Osmosis is currently the most dominant DEX in the Cosmos ecosystem, accounting for a majority of the total IBC transfers & trading volume in the Cosmos. `,
        "Background and History": ("Osmosis was created to support the Interchain DeFi movement, which focuses on building decentralized finance (DeFi) applications on Tendermint-based blockchains in the Cosmos ecosystem. The Cosmos SDK is an open-source software development kit that allows developers to create custom and scalable blockchains, while the Inter-Blockchain Communication (IBC) Protocol, launched in February 2021, enables these blockchains to interact and communicate with one another. Osmosis leverages the IBC protocol to provide a seamless cross-chain trading experience for users. Osmosis was founded by Sunny Aggarwal, a well-known figure in the blockchain industry who has been actively involved in the development of various blockchain projects. Aggarwal previously worked as a researcher and software engineer at Tendermint, the company behind the Cosmos SDK."),
        "Hub History": ("The Cosmose Hub Blockchain was launched in March 2019 after a successful Initial Coin Offering (ICO) that raised $17 million in funding. The Cosmos project was started by Jae Kwon, who is also the CEO of Tendermint, and Ethan Buchman. Since its launch, the Cosmos Hub has seen steady growth in its ecosystem. As of April 2023, there are over 200 projects built on the Cosmos SDK, the main development framework for building blockchains like the Cosmos Hub. These projects include blockchain-based games, decentralized finance (DeFi) applications, and social media platforms."),
        "$ATOM Wallet Support": ("There are several wallets that support ATOM, including Keplr, Cosmostation, Leap, Tabu and Ledger. Keplr is a multi-chain wallet that supports ATOM and other cryptocurrencies on the Cosmos network. Cosmostation is a mobile wallet that allows users to send and receive ATOM and other cryptocurrencies on the Cosmos network. Ledger is a hardware wallet that supports ATOM and other cryptocurrencies, providing users with an extra layer of security for their digital assets."),
        "Conclusion": ("The Cosmos Hub Blockchain is a decentralized network of independent parallel blockchains that allows for highly interoperable custom-built blockchains. The Cosmos Hub Blockchain is built on Tendermint, a consensus engine that provides high security and reliability. One of the unique features of the Cosmos Hub is its ability to communicate with other blockchains in the Cosmos ecosystem through the Inter-Blockchain Communication protocol. The native token of the Cosmos Hub is ATOM, which is used for staking, transaction fees, and as a means of exchange between different blockchains in the Cosmos ecosystem. There are several wallets that support"),
      },
      tags: ["Cosmos Ecosystem", "DeFi", "Dex"],
      logoTypeface: require("./imagelogos/OsmosisTypeface.svg").default,
      logo: osmologo,
      coverPhoto: osmosisArt,
      ticker: "OSMO",
      price: 1.20,
      apiPriceLink: "https://api.coingecko.com/api/v3/coins/osmosis/market_chart?vs_currency=usd&days=max&interval=daily",
      mCap: "$403M",
      tvl: "$120M",
      website:"https://osmosis.zone/",
      twitter: "https://twitter.com/osmosiszone",
      telegram: "https://twitter.com/osmosiszone",
      github: "https://github.com/osmosis-labs",
      cssSheet: {
        ":root": {
          "--backgroundHeader": "#2d2755",
          "--HeaderOutline": "#a4f9ff",
          "--RocketshipRocket": "white",
          "--RocketshipTypeface": "white",
          "--navbtn": "white",
          "--navbtnOutline": "white",
          "--navbtnborderbottom": "white",
          "--navbtnbackground": "black",
          "--searchbarBackground": "black",
          "--searchInputFontColor": "white",
          "--searchInputBackground": "black",
          "--searchIcon": "white",
          "--menuIcon": "white",
          "--mainbodyBackground": "#170f34",
          "--dashboardOutline": "#756b95",
          "--dashboardFontColor": "white",
          "--dashboardBackground": "#2d2755",
          "--dashSelectedNavUnderline": "#756b95",
          "--dashContentOutline": "#756b95",
          "--dashContentBackground": "#3c356c",
          "--DashboardSubtitleTextColor": "#FFF",
          "--DashboardEstTextColor": "rgba(255, 255, 255, 0.253)",
          "--DashboardTagTextColor": "#FFF",
          "--DashboardTagBackgroundColor": "#462ADF",
          "--DashboardTagOutlineColor": "#756b95",
          "--DashboardTokenOverviewDividerColor": "#756b95",
          "--DashboardTokenStatsNumberColor": "#FFF",
          "--DashboardTokenStatsSubtitleColor": "rgba(255, 255, 255, 0.753)",
          "--DashboardTokenTickerColor": "#fff",
          "--DashboardChartOutlineColor": "#756b95",
          "--DashboardReadMoreContentTextColor": "#FFF",
          "--DashboardReadMoreTextColor": "#fff",
          "--DashboardReadMoreBackgroundColor": "#2d2755",
          "--DashboardReadMoreDivTopBorderColor": "#756b95",
          "--articleBackground": "#3c356c",
          "--articleOutline": "#756b95",
          "--articleImageOutline": "#756b95",
          "--articleDescriptionTextColor": "rgba(255, 255, 255, 0.656)",
          "--articleButtonTextColor": "#000",
          "--articleButtonTextTransitionColor": "#FFF",
          "--articleButtonOutline": "#000",
          "--articleButtonBackground": "#756b95",
          "--articlePlusIconOutline": "rgb(255, 255, 255)",
          "--dashboardStatBlockBackgroundColor": "#756b95",
          "--dashboardStatBlockOutlineColor":"#462ADF",
          "--dashboardChartSettingsButtonOutline": "#756b95",
          "--dashboardChartSettingsButtonBackground": "#2d2755",
          "--dashboardChartSettingsSelectedButtonBackground": "#462adf",
        }
      },
    },
    {
      id: 2,
      title: "Celestia",
      subTitle: "First Modular Network",
      est: "TBA",
      articleDescription: "The Data Availability Layer powering Sovereign RollUps",
      description: "Celestia is a modular consensus and data network, built to enable anyone to easily deploy their own sovereign blockchain with minimal overhead.",
      textContent:{
        "Introduction": `Celestia is a new technology that powers, scales and secures Web3 applications. To achieve this, Celestia introduces a new modular blockchain architecture that solves the core scaling problems of today's blockchains.`,
        "But what's a modular blockchain?": ("Modular blockchains are a new paradigm in blockchain design. Instead of one blockchain doing everything, modular blockchains specialize and optimize to perform a given function. This specialization provides breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain applications for mass adoption."),
        "How is Celestia different from Bitcoin and Ethereum?": ("If Bitcoin is a calculator and Ethereum is a computer, then Celestia is a cloud computer. Bitcoin showed that it was possible to build a decentralized application but was very limited in what it could be used to build. Ethereum showed that it was possible to build a programmable blockchain that anyone could use to launch a decentralized application. Celestia will show that it is possible to build a network that enables anyone to launch their own blockchain. </p>"),
        "What's a good analogy of Celestia?": ("Think of Celestia as a power grid, except instead of providing electricity, Celestia provides the essential resource to power a blockchain: consensus and data availability. Similar to how anyone can plug into an electricity grid to power their appliance, anyone can plug into Celestia's network to power their own blockchain."),
        "What is data availability and why does it matter?": ("Data availability is critical to the security of any blockchain because it ensures that anyone can inspect the ledger of transactions and verify it. Data availability answers the question, has the data for this blockchain been published? Users of a monolithic blockchain download all the data to check that it is available. As blocks get bigger, it becomes impractical for normal users to download all the data meaning that they can't verify the chain. Modular chains solve this problem by making it possible for users to verify very large blocks using a technology called data availability sampling."),
      },
      tags: ["Cosmos Ecosystem", "Modular", "Infrastucture"],
      logoTypeface: Celestialogo,
      logo: osmologo,
      coverPhoto: "https://pbs.twimg.com/media/FialWRyWYAESR9H.jpg",
      ticker: "TIA",
      price: "N/A",
      apiPriceLink: "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=max&interval=daily",
      mCap: "N/A",
      tvl: "N/A",
      website:"https://celestia.org/",
      twitter: "https://twitter.com/CelestiaOrg",
      telegram: "https://t.me/CelestiaCommunity",
      github: "https://github.com/celestiaorg",
      cssSheet: {
        ":root": {
          "--backgroundHeader": "#7B2BF9",
          "--HeaderOutline": "#fff",
          "--RocketshipRocket": "white",
          "--RocketshipTypeface": "white",
          "--navbtn": "white",
          "--navbtnOutline": "white",
          "--navbtnborderbottom": "white",
          "--navbtnbackground": "black",
          "--searchbarBackground": "black",
          "--searchInputFontColor": "white",
          "--searchInputBackground": "black",
          "--searchIcon": "white",
          "--menuIcon": "white",
          "--mainbodyBackground": "linear-gradient(0deg, #FFF 0%, #FFDAAE 85%, #F4668D 99%, #FD63D9 100%);",
          // "--mainbodyBackground": "linear-gradient(0deg, #fff 50%, #FFFFC5 75%, #FFDAAE 85%, #F4668D 95%, #FD63D9 100%);",
          // "--mainbodyBackground": "url(https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC8wN1wvMjIzNjI1XC9wcm9qZWN0c1wvMzEyNTQ3XC9hc3NldHNcLzgxXC81ODExNDk4XC81MmZhMTkyZTJhMzRiMmZlYzhmZGQ4MThhN2YwNThjMi0xNjMwMzI2MDkwLnBuZyJ9:frontify:OorydEFSorffrVh9DhVqxXGCmRvFyWi9ikzUtlEGZsA?width={width})",
          // "--mainbodyBackground": "linear-gradient(0deg, #7B2BF9 0%, #FD63D9 90%, #F4668D 100%);",
          // "--mainbodyBackground": "linear-gradient(180deg, #7B2BF9 0%, #FFF 100%);",
          // #7B2BF9 0%, #FFDAAE 50%, #fff 100%
          // #FD63D9  15%, #F4668D  17.5%, #a4f9ff 20%, #FFFFC5 65% #fffvv
          "--dashboardOutline": "#756b95",
          "--dashboardFontColor": "white",
          "--dashboardBackground": "#7B2BF9",
          "--dashSelectedNavUnderline": "#fff",
          "--dashContentOutline": "#fff",
          "--dashContentBackground": "linear-gradient(-45deg, #FFDAAE  0%, #7B2BF9 100%);",
          "--DashboardSubtitleTextColor": "#FFF",
          "--DashboardEstTextColor": "rgba(255, 255, 255, 0.253)",
          "--DashboardTagTextColor": "#FFF",
          "--DashboardTagBackgroundColor": "#d039eb",
          "--DashboardTagOutlineColor": "#fff",
          "--DashboardTokenOverviewDividerColor": "#FFF",
          "--DashboardTokenStatsNumberColor": "#FFF",
          "--DashboardTokenStatsSubtitleColor": "rgba(255, 255, 255, 0.753)",
          "--DashboardTokenTickerColor": "#fff",
          "--DashboardChartOutlineColor": "#fff",
          "--DashboardReadMoreContentTextColor": "#FFF",
          "--DashboardReadMoreTextColor": "#fff",
          "--DashboardReadMoreBackgroundColor": "#7B2BF9",
          "--DashboardReadMoreDivTopBorderColor": "#fff",
          "--articleBackground": "#7B2BF9",
          "--articleOutline": "#fff",
          "--articleImageOutline": "#fff",
          "--articleDescriptionTextColor": "rgba(255, 255, 255, 0.75)",
          "--articleButtonTextColor": "#000",
          "--articleButtonTextTransitionColor": "#000",
          "--articleButtonOutline": "#000",
          "--articleButtonBackground": "linear-gradient(-25deg, #FFf  0%,  #FFF 100%);",
          "--articlePlusIconOutline": "rgb(255, 255, 255)",
          "--dashboardStatBlockBackgroundColor": "#7B2BF9",
          "--dashboardStatBlockOutlineColor": "#d039eb",
          "--dashboardChartSettingsButtonOutline": "#fff",
          "--dashboardChartSettingsButtonBackground": "#7B2BF9",
          "--dashboardChartSettingsSelectedButtonBackground": "#d039eb",
        }
      },
    },
  ];



  

  export default chains;
