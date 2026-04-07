# Celo Network Information

> Source: https://docs.celo.org/build-on-celo/network-overview

## Celo Mainnet

| Field | Value |
|-------|-------|
| Chain ID | `42220` |
| Network Name | Celo Mainnet |
| Currency Symbol | CELO |
| Public RPC | `https://forno.celo.org` (rate-limited) |
| Block Explorer (primary) | https://celoscan.io |
| Block Explorer (alt) | https://explorer.celo.org |
| Block Time | ~1 second |
| Average Gas Fee | ~$0.0005 |
| Native Bridge | https://superbridge.app/celo |
| L2 Stack | OP Stack (Optimism rollup) |
| Data Availability | EigenDA v2 |
| Fault Proofs | ZK via Succinct SP1 (Jello hardfork) |
| L1 → L2 Migration | March 26, 2025 (block 31,056,500) |

### Fee-Accepted Tokens (Gas Abstraction)

Users can pay gas fees with these ERC-20 tokens instead of native CELO:

- USDm (cUSD) — `0x765DE816845861e75A25fCA122bb6898B8B1282a`
- USDC — `0xcebA9300f2b948710d2653dD7B07f33A8B32118C`
- USDT — `0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e`
- EURm (cEUR) — `0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73`

The `FeeCurrencyDirectory` contract at `0x15F344b9E6c3Cb6F0376A36A64928b13F62C6276` governs the allowlist.

## Celo Sepolia Testnet

| Field | Value |
|-------|-------|
| Chain ID | `11142220` |
| Network Name | Celo Sepolia |
| Currency Symbol | CELO |
| Public RPC | `https://forno.celo-sepolia.celo-testnet.org` |
| OP-Node RPC | `https://op.celo-sepolia.celo-testnet.org` |
| Block Explorer | https://celo-sepolia.blockscout.com |
| Bridge | https://testnets.superbridge.app |

### Testnet Faucets

- Google Cloud: https://cloud.google.com/application/web3/faucet/celo/sepolia
- Celo Faucet: https://faucet.celo.org/celo-sepolia

## RPC Providers

| Provider | Notes |
|----------|-------|
| Forno (Celo-native) | `https://forno.celo.org` — free, rate-limited |
| Alchemy | Enhanced APIs, webhooks, analytics |
| QuickNode | Global edge network, Streams |
| Infura (Consensys) | Standard Ethereum-style RPC |
| Ankr | All-in-one Web3 hub |
| Lava | Decentralized RPC network |
| OnFinality | Multi-chain RPC |
| Dwellir | Nordic-hosted nodes |

## Block Explorers

| Explorer | URL | Notes |
|----------|-----|-------|
| Celoscan | https://celoscan.io | Primary, Etherscan-family |
| Blockscout | https://explorer.celo.org | Open-source, full-featured |
| Dora | https://www.ondora.xyz/network/celo | Multi-chain explorer |
