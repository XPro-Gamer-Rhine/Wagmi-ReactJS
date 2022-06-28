import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { Toaster } from 'react-hot-toast';
import { chain, createClient, WagmiProvider } from 'wagmi';

const rpcUrl = process.env.RINKEBY_RPC_URL as string;

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [apiProvider.alchemy(rpcUrl), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: 'My Web3 App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <Toaster position="bottom-left" />
        <App />
      </RainbowKitProvider>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
