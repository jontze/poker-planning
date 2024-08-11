const GRAPHQL_ENDPOINT =
  (import.meta.env.VITE_GRAPHQL_ENDPOINT as string) ?? '/graphql';
const GRAPHQL_SECURE_WS_ENDPOINT =
  (import.meta.env.VITE_GRAPHQL_SECURE_WS_ENDPOINT as string) === 'true';
const GRAPHQL_WS_ENDPOINT =
  (import.meta.env.VITE_GRAPHQL_WS_ENDPOINT as string) ??
  `${GRAPHQL_SECURE_WS_ENDPOINT ? 'wss://' : 'ws://'}${
    window.location.host
  }/graphql`;

console.log('GRAPHQL_ENDPOINT', GRAPHQL_ENDPOINT);
console.log('GRAPHQL_WS_ENDPOINT ', GRAPHQL_WS_ENDPOINT);

export { GRAPHQL_ENDPOINT, GRAPHQL_WS_ENDPOINT };
