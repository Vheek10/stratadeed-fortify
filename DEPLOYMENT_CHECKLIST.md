# Etherlink Deployment Checklist

## Pre-Deployment

- [ ] **Environment Setup**
  - [ ] Copy `.env.example` to `.env.local`
  - [ ] Add `PRIVATE_KEY` (from wallet with testnet XTZ)
  - [ ] Add `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
  - [ ] Verify RPC URLs are correct

- [ ] **Get Testnet Funds**
  - [ ] Visit https://faucet.etherlink.com
  - [ ] Request testnet XTZ (need ~1 XTZ for deployment)
  - [ ] Verify balance: `npx hardhat run scripts/check-balance.js --network etherlinkTestnet`

- [ ] **Update Admin Addresses**
  - [ ] Edit `scripts/deploy-etherlink.js`
  - [ ] Replace placeholder admin addresses (lines 35-36) with real addresses
  - [ ] Ensure you have 3+ admin addresses for multisig

- [ ] **Compile Contracts**
  - [ ] Run `npm run compile`
  - [ ] Verify no compilation errors
  - [ ] Check artifacts are generated in `src/contracts/artifacts/`

## Deployment

- [ ] **Deploy to Testnet**
  - [ ] Run `npm run deploy:etherlink:testnet`
  - [ ] Wait for confirmation (~10 seconds)
  - [ ] **SAVE THE PROXY ADDRESS** (this is your main contract address)
  - [ ] Save deployment info JSON file

- [ ] **Update Environment Variables**
  - [ ] Copy proxy address to `.env.local`:
    ```
    NEXT_PUBLIC_STRATADEED_RWA_ADDRESS=0x...
    ```
  - [ ] Restart dev server if running

- [ ] **Verify Contract (Optional)**
  - [ ] Run verification command (may not work if explorer API is limited)
  - [ ] Manually verify on https://testnet.explorer.etherlink.com

## Frontend Configuration

- [ ] **Update Contract Config**
  - [ ] Verify `src/config/contracts.ts` has correct addresses
  - [ ] Check chain IDs match (128123 for testnet, 42793 for mainnet)

- [ ] **Test Wallet Connection**
  - [ ] Run `npm run dev`
  - [ ] Open http://localhost:3000
  - [ ] Connect MetaMask or Temple Wallet
  - [ ] Verify network is Etherlink Testnet
  - [ ] Check wallet shows XTZ balance (6 decimals)

- [ ] **Test Contract Interactions**
  - [ ] Complete KYC verification (if implemented)
  - [ ] Deposit small amount to escrow (e.g., 0.1 XTZ)
  - [ ] Verify transaction on explorer
  - [ ] Check dashboard shows deposit

## Testing

- [ ] **Functional Tests**
  - [ ] Deposit escrow
  - [ ] Admin confirms finalization (need 3 admins)
  - [ ] Claim tokens
  - [ ] Transfer tokens to another address
  - [ ] Deposit yield (as owner)
  - [ ] Claim yield (as token holder)

- [ ] **Edge Cases**
  - [ ] Try depositing over cap (should fail)
  - [ ] Try claiming before finalization (should fail)
  - [ ] Try transferring without KYC (should fail)
  - [ ] Test emergency refund flow

- [ ] **UI/UX**
  - [ ] All pages load correctly
  - [ ] Wallet connection works
  - [ ] Transaction confirmations show
  - [ ] Error messages are clear
  - [ ] Mobile responsive

## Production Deployment

- [ ] **Mainnet Preparation**
  - [ ] Audit smart contracts (consider professional audit)
  - [ ] Test thoroughly on testnet
  - [ ] Prepare mainnet admin addresses
  - [ ] Get mainnet XTZ (need ~2-5 XTZ for deployment + gas)

- [ ] **Deploy to Mainnet**
  - [ ] Update `.env.local` with mainnet private key
  - [ ] Run `npm run deploy:etherlink:mainnet`
  - [ ] **SAVE MAINNET ADDRESSES** (backup multiple places!)
  - [ ] Update `.env.local` with mainnet addresses

- [ ] **Frontend Deployment**
  - [ ] Update environment variables in Vercel/hosting platform
  - [ ] Deploy frontend: `vercel --prod`
  - [ ] Test on production URL
  - [ ] Verify all features work

- [ ] **Post-Deployment**
  - [ ] Announce on social media
  - [ ] Update GitHub README with mainnet addresses
  - [ ] Monitor contract for first 24 hours
  - [ ] Set up monitoring/alerts (e.g., Tenderly)

## Fortify Labs Submission

- [ ] **Documentation**
  - [ ] Update README with Etherlink branding
  - [ ] Add deployment addresses
  - [ ] Include architecture diagrams
  - [ ] Document all features

- [ ] **Demo Materials**
  - [ ] Record 3-5 minute video walkthrough
  - [ ] Create pitch deck (emphasize RWA + Tezos synergy)
  - [ ] Prepare live demo environment
  - [ ] Screenshot key features

- [ ] **Submission**
  - [ ] Clean up code (remove console.logs, TODOs)
  - [ ] Ensure all tests pass
  - [ ] Push to GitHub (make repo public if required)
  - [ ] Submit to Fortify Labs portal
  - [ ] Follow up with team

## Troubleshooting

### "Insufficient funds" error
- Get more testnet XTZ from faucet
- Check you're using correct network

### "Chain not supported" in wallet
- Manually add Etherlink network to MetaMask
- Or use Temple Wallet (has native support)

### Contract deployment fails
- Check private key is correct
- Verify RPC URL is accessible
- Ensure you have enough XTZ for gas

### Frontend shows wrong balances
- Verify you're using `formatUnits(balance, 6)` not `formatEther`
- Check chain ID matches (128123 or 42793)

### Transactions fail
- Ensure wallet is connected to correct network
- Check contract address is correct
- Verify you've completed KYC (if required)

---

**Last Updated**: January 24, 2026  
**Network**: Etherlink (Testnet: 128123, Mainnet: 42793)  
**Status**: Ready for deployment ✅
