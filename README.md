# StrataDeed on Etherlink

> **Privacy-Preserving RealFi Platform on Etherlink (Tezos L2)**  
> *Bringing $300T Real Estate Onchain with Zero-Knowledge Compliance*

[![Built on Etherlink](https://img.shields.io/badge/Built%20on-Etherlink-0066FF)](https://etherlink.com/)
[![Powered by Tezos](https://img.shields.io/badge/Powered%20by-Tezos-2C7DF7)](https://tezos.com/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Hardhat](https://img.shields.io/badge/Smart_Contracts-Hardhat-yellow)](https://hardhat.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌟 Why Etherlink?

StrataDeed has been ported to **Etherlink**, Tezos' EVM-compatible Layer 2, to leverage:

- ⚡ **Sub-second finality** – Instant property trades and settlements
- 💰 **Ultra-low fees** – ~$0.001 per transaction (vs $5-50 on Ethereum)
- 🔒 **Tezos security** – Institutional-grade reliability with formal verification
- 🌍 **EVM-compatible** – Seamless integration with existing Web3 tools
- ♻️ **Energy efficient** – Proof-of-Stake consensus (99.9% less energy than PoW)
- 🏛️ **Compliance-ready** – Tezos' proven track record with regulated institutions

**Perfect for Real-World Assets (RWAs):** Etherlink combines the security and compliance of Tezos with the developer experience of Ethereum, making it ideal for tokenizing real estate.

---

## 📺 Demo & Live Links

**Live Demo**: [https://strata-deed.vercel.app](https://strata-deed.vercel.app)  
**Video Walkthrough**: [3-Minute Demo](#) *(coming soon)*  
**Smart Contracts**: [Etherlink Explorer](https://explorer.etherlink.com)  
**GitHub**: [github.com/Vheek10/StrataDeed](https://github.com/Vheek10/StrataDeed)

---

## 🏗️ What is StrataDeed?

**StrataDeed transforms illiquid real estate into liquid, accessible digital assets while preserving privacy and compliance.**

### The Problem We Solve

| Problem | Traditional Solution | **StrataDeed's Solution** |
|---------|---------------------|--------------------------|
| **High Entry Barrier** | $50k+ minimum investments | **Fractional ownership from $100** |
| **Illiquidity** | 30-60 day settlements | **24/7 trading on Etherlink** |
| **Privacy vs Compliance** | Choose one or the other | **ZK-KYC: Compliant yet private** |
| **Paperwork & Middlemen** | Lawyers, brokers, banks | **Smart contracts automate everything** |
| **Geographic Barriers** | Local investors only | **Global access via blockchain** |
| **High Fees** | 2-6% transaction fees | **<0.1% on Etherlink** |

### Core Features

1. **ERC-20 Tokenization** – Fractional property ownership with built-in compliance
2. **ZK-ready KYC** – Privacy-preserving identity verification (future: full ZK proofs)
3. **Escrow Vaults** – Secure fund management with multi-sig governance
4. **24/7 Marketplace** – Trade property tokens anytime, anywhere
5. **Yield Distribution** – Automated rental income distribution to token holders
6. **Professional Dashboard** – Track investments, claim yields, manage portfolio

---

## 🚀 Quick Start (5 Minutes)

### 1. Clone & Install

```bash
git clone https://github.com/Vheek10/StrataDeed.git
cd StrataDeed
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- Your `PRIVATE_KEY` (for deployment)
- Your `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` (get from [WalletConnect Cloud](https://cloud.walletconnect.com))

### 3. Get Testnet XTZ

Visit [Etherlink Faucet](https://faucet.etherlink.com) and request test XTZ.

### 4. Deploy Contracts (Testnet)

```bash
npm run compile
npm run deploy:etherlink:testnet
```

**Save the deployed contract address!** Update `.env.local`:

```bash
NEXT_PUBLIC_STRATADEED_RWA_ADDRESS=0x... # Your deployed address
```

### 5. Run Frontend

```bash
npm run dev
```

Visit `http://localhost:3000` and connect your wallet!

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router) – React framework with server components
- **React 19** – Latest React with concurrent features
- **Tailwind CSS 4** – Utility-first styling
- **Framer Motion** – Smooth animations

### Web3 Integration
- **Wagmi v3** – React hooks for Ethereum
- **Viem** – TypeScript-first Ethereum library
- **RainbowKit** – Beautiful wallet connection UI

### Smart Contracts
- **Solidity 0.8.24** – Latest stable version
- **OpenZeppelin Upgradeable** – Battle-tested contract libraries
- **Hardhat** – Development environment
- **Foundry** – Fast Solidity testing (optional)

### Network
- **Etherlink Testnet** (Chain ID: 128123) – For development
- **Etherlink Mainnet** (Chain ID: 42793) – For production

---

## 📁 Project Structure

```
StrataDeed/
├── contracts/              # Solidity smart contracts
│   ├── StrataDeedRWA.sol  # Main RWA tokenization contract
│   └── StrataDeedNFT.sol  # NFT for whole property ownership
├── scripts/               # Deployment scripts
│   └── deploy-etherlink.js # Etherlink deployment
├── src/
│   ├── app/              # Next.js pages (App Router)
│   ├── components/       # React components
│   ├── config/           # Configuration files
│   │   ├── chains/       # Chain definitions (Etherlink)
│   │   ├── web3/         # Wagmi/RainbowKit config
│   │   └── contracts.ts  # Contract addresses & ABIs
│   ├── hooks/            # Custom React hooks
│   └── providers/        # Context providers
├── public/               # Static assets
├── .env.example          # Environment variables template
├── hardhat.config.js     # Hardhat configuration
└── package.json          # Dependencies
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server
npm run build            # Build for production
npm run start            # Start production server

# Smart Contracts
npm run compile          # Compile contracts
npm run test             # Run contract tests

# Deployment
npm run deploy:etherlink:testnet   # Deploy to Etherlink testnet
npm run deploy:etherlink:mainnet   # Deploy to Etherlink mainnet
npm run verify:etherlink           # Verify contracts on explorer
```

---

## 🏛️ Smart Contract Architecture

### StrataDeedRWA.sol

**UUPS Upgradeable** ERC-20 contract for fractional property ownership.

**Key Features:**
- Multi-sig governance (3-of-N admin threshold)
- Escrow system with pro-rata token distribution
- Automated yield distribution to token holders
- Compliance layer (KYC/AML with ZK-ready hooks)
- Emergency refund mechanism
- Pausable & upgradeable

**State Machine:**
```
Funding → Finalized → [Trading + Yield Distribution]
   ↓
Cancelled → Refunds
   ↓
Emergency → Pro-rata Refunds
```

### Deployment Pattern

```
Implementation Contract (Logic)
         ↓
    ERC1967 Proxy (Storage + Delegatecall)
         ↓
    Your Interactions (Always use proxy address)
```

---

## 🔐 Security Features

1. **Multi-Sig Governance** – All critical actions require 3+ admin confirmations
2. **Reentrancy Guards** – Protection against reentrancy attacks
3. **Pausable** – Emergency stop mechanism
4. **Upgradeable** – Fix bugs without losing state (via UUPS)
5. **Compliance Checks** – KYC verification on all transfers
6. **Slippage Protection** – Users set minimum expected tokens/yield

---

## 🌐 Network Configuration

### Add Etherlink to MetaMask

**Testnet:**
- Network Name: `Etherlink Testnet`
- RPC URL: `https://node.ghostnet.etherlink.com`
- Chain ID: `128123`
- Currency Symbol: `XTZ`
- Decimals: `6` ⚠️ (NOT 18!)
- Block Explorer: `https://testnet.explorer.etherlink.com`

**Mainnet:**
- Network Name: `Etherlink`
- RPC URL: `https://node.mainnet.etherlink.com`
- Chain ID: `42793`
- Currency Symbol: `XTZ`
- Decimals: `6` ⚠️ (NOT 18!)
- Block Explorer: `https://explorer.etherlink.com`

### Or Use Temple Wallet

[Temple Wallet](https://templewallet.com) has native Etherlink support – just install and switch to Etherlink network!

---

## ⚠️ Important: XTZ Decimals

**XTZ uses 6 decimals, not 18!**

When working with balances:

```typescript
// ❌ WRONG (assumes 18 decimals)
const balance = ethers.formatEther(balanceWei);

// ✅ CORRECT (6 decimals for XTZ)
const balance = ethers.formatUnits(balanceWei, 6);

// When parsing user input
const amount = ethers.parseUnits(userInput, 6); // Not parseEther!
```

---

## 📚 User Flows

### 1. Property Owner: Tokenize Property

1. Submit property details + documents
2. Undergo verification (off-chain compliance)
3. Set funding cap and token supply
4. Deploy escrow contract
5. Receive funds when cap is reached
6. Distribute tokens to investors

### 2. Investor: Buy Property Tokens

1. Complete KYC verification (ZK-proof)
2. Browse marketplace
3. Deposit funds to escrow
4. Claim tokens after finalization
5. Trade on secondary market
6. Claim rental yield distributions

### 3. Admin: Governance

1. Multi-sig confirms critical actions
2. Finalize escrow (release funds to owner)
3. Distribute yields to token holders
4. Manage compliance (freeze/unfreeze wallets)
5. Upgrade contracts if needed

---

## 🧪 Testing

### Run Contract Tests

```bash
npm run test
```

### Manual Testing Checklist

- [ ] Connect wallet to Etherlink testnet
- [ ] Complete KYC verification
- [ ] Deposit funds to escrow
- [ ] Admin finalizes escrow
- [ ] Claim tokens
- [ ] Transfer tokens to another address
- [ ] Claim yield distribution
- [ ] View dashboard analytics

---

## 🚢 Deployment to Production

### 1. Deploy to Etherlink Mainnet

```bash
npm run deploy:etherlink:mainnet
```

### 2. Update Environment Variables

Update `.env.local` with mainnet contract addresses.

### 3. Deploy Frontend to Vercel

```bash
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

### 4. Verify Contracts

```bash
npx hardhat verify --network etherlinkMainnet <CONTRACT_ADDRESS>
```

---

## 🎯 Roadmap

### Phase 1: MVP (Current)
- [x] Core tokenization contracts
- [x] Escrow & yield system
- [x] Multi-sig governance
- [x] Basic KYC compliance
- [x] Marketplace UI
- [x] Port to Etherlink

### Phase 2: Enhanced Features (Q2 2026)
- [ ] Full ZK-KYC implementation
- [ ] Cross-chain bridge (Tezos ↔ Etherlink)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Automated property valuation oracle

### Phase 3: Scale (Q3 2026)
- [ ] Multi-property portfolio tokens
- [ ] Lending/borrowing against property tokens
- [ ] Insurance integration
- [ ] Institutional investor portal
- [ ] Regulatory compliance automation

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style (Prettier + ESLint)
- Write tests for new features
- Update documentation
- Keep commits atomic and descriptive

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🆘 Support & Resources

### Documentation
- **Etherlink Docs**: https://docs.etherlink.com
- **Tezos Developer Portal**: https://tezos.com/developers
- **Hardhat Docs**: https://hardhat.org/docs

### Tools
- **Etherlink Explorer**: https://explorer.etherlink.com
- **Testnet Faucet**: https://faucet.etherlink.com
- **Temple Wallet**: https://templewallet.com
- **WalletConnect**: https://cloud.walletconnect.com

### Community
- **GitHub Issues**: [Report bugs or request features](https://github.com/Vheek10/StrataDeed/issues)
- **Twitter**: [@StrataDeed](#) *(coming soon)*
- **Discord**: [Join our community](#) *(coming soon)*

---

## 🏆 Acknowledgments

- **Fortify Labs** – For the Tezos Web3 Startup Studio opportunity
- **Etherlink Team** – For building an amazing EVM-compatible L2
- **Tezos Foundation** – For supporting the ecosystem
- **OpenZeppelin** – For secure smart contract libraries
- **Mantle Network** – Original deployment platform

---

## 📊 Stats & Metrics

*Updated: January 2026*

- **Total Value Locked**: $0 (just launched on Etherlink!)
- **Properties Tokenized**: 0 (testnet only)
- **Active Users**: Growing daily
- **Transaction Fees Saved**: ~99% vs Ethereum mainnet
- **Average Finality**: <1 second

---

**Built with ❤️ for the future of real estate**

*StrataDeed – Making property ownership accessible to everyone, everywhere.*

/** @description Maintenance update */

// import { cn } from "@/lib/utils" // safety check



/* Tailwind style refinement notes */

// Housekeeping: indentation and formatting
