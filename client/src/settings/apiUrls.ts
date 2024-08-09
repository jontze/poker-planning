const GRAPHQL_ENDPOINT =
  (import.meta.env.VITE_GRAPHQL_ENDPOINT as string) ?? '/graphql';
const GRAPHQL_WS_ENDPOINT =
  (import.meta.env.VITE_GRAPHQL_WS_ENDPOINT as string) ?? '/graphql';

console.log('GRAPHQL_ENDPOINT', GRAPHQL_ENDPOINT);
console.log('GRAPHQL_WS_ENDPOINT ', GRAPHQL_WS_ENDPOINT);

export { GRAPHQL_ENDPOINT, GRAPHQL_WS_ENDPOINT };
