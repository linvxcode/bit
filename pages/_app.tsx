import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Chain,
  connectorsForWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { Toaster } from "react-hot-toast";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";



export default function App({ Component, pageProps }: AppProps) {

  const Mainnet: Chain = {
    id: 1,
    name: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://cloudflare-eth.com'],
      },
      infura: {
        http: ['https://mainnet.infura.io/v3'],
        webSocket: ['wss://mainnet.infura.io/ws/v3'],
      },
      public: {
        http: ['https://rpc.ankr.com/eth'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://etherscan.io',
        apiUrl: 'https://api.etherscan.io/api',
      },
    },
    contracts: {
      ensRegistry: {
        address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      },
      ensUniversalResolver: {
        address: '0x8cab227b1162f03b8338331adaad7aadc83b895e',
        blockCreated: 18_958_930,
      },
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 14_353_601,
      },
    },
  }

  const Goerli: Chain = {
    id: 5,
    name: 'Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      alchemy: {
        http: ['https://eth-goerli.g.alchemy.com/v2'],
        webSocket: ['wss://eth-goerli.g.alchemy.com/v2'],
      },
      infura: {
        http: ['https://goerli.infura.io/v3'],
        webSocket: ['wss://goerli.infura.io/ws/v3'],
      },
      default: {
        http: ['https://rpc.ankr.com/eth_goerli'],
      },
      public: {
        http: ['https://rpc.ankr.com/eth_goerli'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Etherscan',
        url: 'https://goerli.etherscan.io',
      },
      default: {
        name: 'Etherscan',
        url: 'https://goerli.etherscan.io',
      },
    },
    contracts: {
      ensRegistry: {
        address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      },
      ensUniversalResolver: {
        address: '0x56522D00C410a43BFfDF00a9A569489297385790',
        blockCreated: 8765204,
      },
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 6507670,
      },
    },
    testnet: true,
  }



  const { chains, publicClient } = configureChains(
    [
      Goerli, Mainnet
    ],
    [
      publicProvider()
    ]);



  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        walletConnectWallet({
          projectId: "80bd5d57909084d51d420a4caa645152",
          chains,
        }),
        metaMaskWallet({
          chains,
          projectId: "80bd5d57909084d51d420a4caa645152",
        }),
      ],
    },
  ]);

  const queryClient = new QueryClient();

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()}>
          <Component {...pageProps} />
          <Toaster position="bottom-center" />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
