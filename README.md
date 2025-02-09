# Pochi.po Frontend

Pochi.po is an AI-powered agent that scans Twitter for emerging meme trends, evaluates their viral potential, and instantly mints a token on Ethereum. It auto-posts the meme token, shares insights, and lets users auto-buy via MPC wallets. Meme. Mint. Moon. 🚀 #AI #Crypto #MemeCoins

---

## Get Started 🚀

### Try pochi.po:
- 🌐 **Web App:** [pochipo.xyz](https://pochipo.xyz)
- 🤖 **AI Agent (Autonome):** [Live Deployment](https://autonome.alt.technology/pochi-po-ljtoie)
- 🐦 **Twitter:** [@PochiPo1589473](https://x.com/PochiPo1589473)

## Use it Locally
Install
```sh
pnpm install
```
Run
```sh
pnpm run dev
```
Build
```sh
pnpm run build
```

## Modules
- **Home:** The home module is the main view of the app. It starts with the banner of the bot and has two important sections:
    - **Pochi Recommend:** Here are the tokens created by the AI agent (**PochiPo**). You can find the most recent here:
    ![Pochi Recommend](https://github.com/PopisAI/pochi-front/blob/main/docs/PochiRecomend.png)
    - **List of Tokens:** Here is the list of the top or trending meme tokens on the chain:
    ![Tokens List](https://github.com/PopisAI/pochi-front/blob/main/docs/Trending.png?raw=true)
- **Profile:** The user must be logged in to interact with the bot so the bot can interact with the user's wallet.
  ![Profile](https://github.com/PopisAI/pochi-front/blob/main/docs/Profile.png?raw=true)
    - **Register:** Users can create their account.
    - **Login:** Users can log in.
- **Tokens:** The tokens view lets you see the list of tokens in a complete view. All the tokens created by PochiPo are marked with the **PochiPo** sign.
  ![Logo](https://github.com/PopisAI/pochi-front/blob/main/public/pochi.svg?raw=true)
- **Token View:** The token view is where you can see all the details of your token. If it is a token created by **PochiPo**, it includes the tweet it was related to and the explanation of why the tweet was selected to create the meme coin.
- **Chat Agent:** This is a widget that is on all pages so you can interact with **PochiPo**, your copilot to build your meme coin portfolio. You can ask it to tell you the balance in your wallet, the new tokens created, to buy and sell tokens, and much more.
  ![Chat](https://github.com/PopisAI/pochi-front/blob/main/docs/chat.png?raw=true)

### Example
```
What is the Balance in Wallet?
```
```
Show me the latest tokens created by PochiPo.
```
```
Buy 10 tokens of the SDOG.
```
```
Sell 5 tokens of CHAT.
```
```
What are the top 5 trending meme tokens?
```

## Contributing 🛠️
PRs welcome! If you have cool ideas, feel free to open an issue or hit us up on Twitter.

## Authors
- [Diego Parra](https://github.com/divait)
- [Luis River](https://github.com/LuisRivera1699)

---

## License 📜
MIT - Do whatever you want, just don’t rug. 😉