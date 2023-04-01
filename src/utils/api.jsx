export const host = 'http://localhost:3001/api/v1'
export const img_link = 'https://storage.googleapis.com/ishladi/'

export const apiGet = (url, token, method = 'GET') => {
  return fetch(host + url, {
    method: `${method}`,
    headers: {
      'autharization': token,
      'Content-Type': 'application/json',
    },
  })
}
