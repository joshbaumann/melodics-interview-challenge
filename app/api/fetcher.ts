export const fetcher = (uri: string, options?) => {
  // Ensures that the SSR is run against localhost in a CI env.
  const url = process.env.CI ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_HOST;
  return fetch(`${url}${uri}`, {
    headers: {
      'content-type': 'application/json'
    },
    ...options
  }).then(res => res.json());
}
