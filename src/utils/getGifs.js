const limit = 10

export default async function getGifs ({ keyword = 'pandas', rating = 'g' } = {}) {
  const URL = `${import.meta.env.VITE_URL_GIFS}api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&rating=${rating}&limit=${limit}`

  const res = await fetch(URL)
  const response = await res.json()
  const { data } = response
  const gifs = data.map(gif => {
    const { id, title, images } = gif
    const { url } = images.downsized_medium
    return { id, title, url }
  })

  return gifs
}
