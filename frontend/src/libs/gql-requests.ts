import { initUrqlClient } from 'next-urql';
import { Client } from 'urql';
import { ssrExchange, cacheExchange, fetchExchange, useQuery } from 'urql';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const ssrCache = ssrExchange({ isClient: false });
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
        exchanges: [cacheExchange, ssrCache, fetchExchange],
      },
      false,
    );
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}
