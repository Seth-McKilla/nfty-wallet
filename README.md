# Welcome to [Nfty Wallet](https://nfty-wallet.vercel.app/)!

![image](https://user-images.githubusercontent.com/63591760/153483127-9505ec8f-038b-40c0-b2d4-7563fdd6dda3.png)

### A dead simple personal wallet to view all of your Ethereum NFTs with one simple login powered by Unstoppable Domains.

## Hackathon submission
This project was created as a submission for the [Integrating UNS “Login With Unstoppable”](https://gitcoin.co/issue/unstoppabledomains/gitcoin-bounties/4/100027487) bounty within Gitcoin's Schelling Point Virtual Hackathon.

## Features
⚡List of all your Ethereum NFTs
<br />
⚡Searchable by NFT name and collection
<br />
⚡Fully mobile responsive
<br />
⚡Dark / light mode toggle

## Demo of the project
Check out the a demo video of the project [here](https://youtu.be/pOQ4j0Bn2oU)!

## Contact info for questions
**Discord: SethMcKilla#2242**
<br>
**Email: seth@endevrs.dev**
<br>
**Twitter: https://twitter.com/SethMcKilla**
<br>
**Gitcoin: https://gitcoin.co/seth-mckilla**

## The tech stack
React: https://reactjs.org/
<br>
Chakra UI: https://chakra-ui.com/
<br>
Unstoppable Domains (@uath/js): https://www.npmjs.com/package/@uauth/js
<br>
Openseas API: https://docs.opensea.io/reference/api-overview

## Steps to setup locally
1. Clone the repo and navigate into the directory:
```
git clone https://github.com/Seth-McKilla/nfty-wallet
cd nfty-wallet
```

2. Install the dependencies:
```
npm install
```

3. Create a .env.local file in the root folder and populate it with the following variables:
```
REACT_APP_UAUTH_CLIENT_ID=
REACT_APP_UAUTH_CLIENT_SECRET=
REACT_APP_UAUTH_REDIRECT_URI=
REACT_APP_UAUTH_LOGOUT_REDIRECT_URI=
```

4. Run the local development environment:
```
npm start
```

5. A browser window should automatically open to http://localhost:3000; if not, simply open one up and navigate to it manually.

## Future plans for the application
- Aggregate NFTs from other blockchains (polygon, avalanche, solana, etc.)
- Ability to share NFTs on Twitter

### Thanks for checking out the project!
