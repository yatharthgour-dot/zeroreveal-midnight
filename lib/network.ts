export type MidnightNetwork = 'preprod' | 'preview';

export type NetworkConfig = {
  id: MidnightNetwork;
  indexerUrl: string;
  indexerWebSocketUrl: string;
  proofServerUrl: string;
};

const NETWORKS: Record<MidnightNetwork, NetworkConfig> = {
  preprod: { id: 'preprod', indexerUrl: 'https://indexer.preprod.midnight.network/api/v1/graphql', indexerWebSocketUrl: 'wss://indexer.preprod.midnight.network/api/v1/graphql/ws', proofServerUrl: 'https://proof-server.preprod.midnight.network' },
  preview: { id: 'preview', indexerUrl: 'https://indexer.preview.midnight.network/api/v1/graphql', indexerWebSocketUrl: 'wss://indexer.preview.midnight.network/api/v1/graphql/ws', proofServerUrl: 'https://proof-server.preview.midnight.network' },
};

export const DEFAULT_NETWORK: MidnightNetwork = process.env.NEXT_PUBLIC_MIDNIGHT_NETWORK === 'preview' ? 'preview' : 'preprod';

export function getNetworkConfig(network: MidnightNetwork = DEFAULT_NETWORK): NetworkConfig {
  return NETWORKS[network];
}