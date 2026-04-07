# MiniPay Development Guide

> Source: docs.celo.org/build-on-celo/build-on-minipay/*

MiniPay is a non-custodial stablecoin wallet integrated into Opera Mini and available as a standalone app on Android and iOS. It's the fastest growing wallet in the Global South with 11M+ activations, 300M+ stablecoin transactions, available in 60+ countries.

- Android: https://play.google.com/store/apps/details?id=com.opera.minipay
- iOS: https://apps.apple.com/de/app/minipay-easy-global-wallet/id6504087257

---

## Quickstart

### Scaffold a Mini App

```bash
npx @celo/celo-composer@latest create -t minipay
```

### Requirements

- TypeScript v5+
- Viem v2+
- Physical Android or iOS device (emulators do NOT work)
- ngrok for local testing

### Install Dependencies

```bash
npm install viem@2 @celo/abis @celo/identity
```

---

## MiniPay Detection

Check if your dApp is running inside MiniPay:

```typescript
function isMiniPay(): boolean {
  return typeof window !== "undefined"
    && window.ethereum !== undefined
    && window.ethereum.isMiniPay === true;
}
```

---

## Wallet Connection

### Without Any Library (simplest)

```typescript
import { createWalletClient, custom } from "viem";
import { celo, celoSepolia } from "viem/chains";

const client = createWalletClient({
  chain: celo,
  transport: custom(window.ethereum),
});

const [address] = await client.getAddresses();
```

### With Wagmi (React)

```typescript
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

// Auto-connect in MiniPay (no connect button needed)
useEffect(() => {
  if (window.ethereum?.isMiniPay) {
    connect({ connector: injected({ target: "metaMask" }) });
  }
}, []);
```

### Conditional Connect Button

```tsx
const [hideConnectBtn, setHideConnectBtn] = useState(false);

useEffect(() => {
  if (window.ethereum?.isMiniPay) {
    setHideConnectBtn(true);
    connect({ connector: injected({ target: "metaMask" }) });
  }
}, []);

// Only show connect button outside MiniPay
{!hideConnectBtn && <ConnectButton />}
```

---

## Supported Stablecoins

| Token | Symbol | Address | Decimals |
|-------|--------|---------|----------|
| Mento Dollar | USDm (cUSD) | `0x765DE816845861e75A25fCA122bb6898B8B1282a` | 18 |
| USDC | USDC | `0xcebA9300f2b948710d2653dD7B07f33A8B32118C` | 6 |
| USDT | USDT | `0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e` | 6 |

**Important**: USDm has 18 decimals while USDC/USDT have 6. Always check decimals before displaying amounts.

---

## Check Token Balance

```typescript
import { createPublicClient, http, formatUnits } from "viem";
import { celo } from "viem/chains";

const USDM_ADDRESS = "0x765DE816845861e75A25fCA122bb6898B8B1282a";

const ERC20_ABI = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
] as const;

const publicClient = createPublicClient({
  chain: celo,
  transport: http(),
});

const balance = await publicClient.readContract({
  address: USDM_ADDRESS,
  abi: ERC20_ABI,
  functionName: "balanceOf",
  args: [userAddress],
});

const formatted = formatUnits(balance, 18); // "12.50"
```

---

## Send Stablecoin Payment

```typescript
import { createWalletClient, custom, encodeFunctionData, parseUnits } from "viem";
import { celo } from "viem/chains";

const USDM_ADDRESS = "0x765DE816845861e75A25fCA122bb6898B8B1282a";

const ERC20_ABI = [
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

const walletClient = createWalletClient({
  chain: celo,
  transport: custom(window.ethereum),
});

const [address] = await walletClient.getAddresses();

const data = encodeFunctionData({
  abi: ERC20_ABI,
  functionName: "transfer",
  args: [recipientAddress, parseUnits("1.00", 18)], // Send 1 USDm
});

const txHash = await walletClient.sendTransaction({
  account: address,
  to: USDM_ADDRESS,
  data,
  // Pay gas with USDm (fee abstraction)
  feeCurrency: USDM_ADDRESS,
});
```

---

## Gas Estimation with Fee Currency

MiniPay users pay gas in stablecoins. Estimate gas cost in USDm:

```typescript
// Estimate gas units
const gasEstimate = await publicClient.estimateGas({
  account: address,
  to: USDM_ADDRESS,
  data,
  feeCurrency: USDM_ADDRESS,
});

// Get gas price in USDm
const gasPrice = await publicClient.request({
  method: "eth_gasPrice",
  params: [USDM_ADDRESS], // Pass fee currency address
});

// Calculate total fee
const totalFee = gasEstimate * BigInt(gasPrice);
const feeFormatted = formatUnits(totalFee, 18); // e.g., "0.0001"
```

---

## Phone Number → Address Resolution

Resolve phone numbers to wallet addresses using ODIS:

```typescript
import { OdisUtils } from "@celo/identity";
import { AuthSigner } from "@celo/identity/lib/odis/query";
import { FederatedAttestationsAbi } from "@celo/abis";

// 1. Get ODIS identifier from phone number
const identifier = await OdisUtils.Identifier.getObfuscatedIdentifier(
  phoneNumber,
  OdisUtils.Identifier.IdentifierPrefix.PHONE_NUMBER,
  issuerAddress,
  authSigner,
  serviceContext,
);

// 2. Look up address from FederatedAttestations contract
const attestations = await publicClient.readContract({
  address: "0x0aD5b1d0C25ecF6266Dd951403723B2687d6aff2", // FederatedAttestations
  abi: FederatedAttestationsAbi,
  functionName: "lookupAttestations",
  args: [identifier.obfuscatedIdentifier, [issuerAddress]],
});
```

---

## Deeplinks

| Deeplink | URL | Purpose |
|----------|-----|---------|
| Add Cash | `https://minipay.opera.com/add_cash` | Open add cash screen |

---

## Testing with ngrok

MiniPay cannot access localhost. Use ngrok to expose your dev server:

```bash
# Start your dev server
npm run dev  # e.g., port 3000

# In another terminal
ngrok http 3000
```

### Configure dev server for ngrok

**Vite** (`vite.config.ts`):
```typescript
export default defineConfig({
  server: {
    allowedHosts: [".ngrok.io", ".ngrok-free.app"],
  },
});
```

**Next.js** — no special config needed, but add CORS headers if needed.

### Load in MiniPay

1. Open MiniPay on your device
2. Go to Settings > About > tap Version 7+ times to enable Developer Settings
3. Enable Developer Mode + Use Testnet
4. Enter your ngrok HTTPS URL in "Load Test Page"

### Remote Debugging

Connect your Android device via USB and visit `chrome://inspect` in desktop Chrome to debug the MiniPay WebView.

The ngrok dashboard at `http://localhost:4040` shows all requests for debugging.

---

## Important Constraints

1. **No emulators** — MiniPay requires a physical device
2. **Legacy transactions only** — MiniPay ignores EIP-1559 fields. Do not set `maxFeePerGas` / `maxPriorityFeePerGas`
3. **Fee abstraction** — MiniPay pays gas with USDm by default. Use `feeCurrency` parameter
4. **No message signing** — `personal_sign` and `eth_signTypedData` are not supported
5. **Small screens** — Design for mobile-first, low-bandwidth environments
6. **2MB footprint** — Keep Mini App bundle size small

---

## UX Best Practices for Emerging Markets

- Display amounts in local currency when possible (use Mento local stablecoins)
- Minimize data usage — lazy load images, compress assets
- Design for small screens (most users are on budget Android phones)
- Show clear transaction confirmations with USD equivalents
- Handle network errors gracefully (intermittent connectivity is common)
- Keep flows short — minimize steps to complete an action
- Support offline-capable patterns where possible

---

## Funding for MiniPay Builders

- **Celo Builder Fund** (Verda Ventures): $25K investment for MiniPay builders
  - Contact: team@verda.ventures
- **Proof of Ship**: Monthly rewards for consistent building
  - Subscribe: https://celo-devs.beehiiv.com/subscribe
