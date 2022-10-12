const env = import.meta.env
export const getToken = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(env.VITE_APP_CLIENT_ID + ':' + env.VITE_APP_CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  })
  console.log(res);
  const data = await res.json()
  return data
}
