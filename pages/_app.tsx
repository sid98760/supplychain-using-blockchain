import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css"
import { Sepolia } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <ThirdwebProvider
      clientId="b2dd9e53950c64faf1159f6296b62779"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider> 
    </>

    
  );
}

export default MyApp;
