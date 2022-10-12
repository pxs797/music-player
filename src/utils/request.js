export const request = async (url, method) => {
  const token = localStorage.getItem('token')
  const result = await fetch(`https://api.spotify.com/v1/${url}`, {
    method: method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  const data = await result.json();
  return data;
}
