export const fetcher = (uri: string, options?) => {
  return fetch(`${process.env.NEXT_PUBLIC_HOST}${uri}`, {
    headers: {
      'content-type': 'application/json'
    },
    ...options
  }).then(res => res.json());
}
