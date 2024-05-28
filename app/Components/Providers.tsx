"use client"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, useAccount } from 'wagmi';
import {
  sepolia,
  etherlinkTestnet,
  evmos 
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";
import { ReactNode } from 'react';
import UserContextProvider from '../Context/UserContextProvider';

export default function Provider({children}:{children:ReactNode}){
    const projectId = "73c18f0d44294688087b7b4f170ee948";
    const config = getDefaultConfig({
        appName: 'My RainbowKit App',
        projectId: projectId,
        chains: [sepolia,etherlinkTestnet,evmos],
        ssr: true, 
      });
      const queryClient = new QueryClient();
    return(
    <>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
            accentColor:"#8B075E",
        })}>
          <UserContextProvider>
          {children}
          </UserContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </>
    )
}