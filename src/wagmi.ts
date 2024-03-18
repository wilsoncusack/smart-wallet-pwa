import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const config = createConfig({
	chains: [baseSepolia],
	connectors: [coinbaseWallet({ appName: "A Cool App", 
									chainIds: [baseSepolia.id.toString()],
									connectionPreference: "embedded",
								})],
	ssr: true,
	transports: {
		[baseSepolia.id]: http(),
	},
});

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}
