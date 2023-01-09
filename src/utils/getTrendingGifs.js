const rating = 'g'
const limit = 5

export async function getTrendingGifs () {
  const URL = `${import.meta.env.VITE_URL_TRENDING_GIFS}api_key=${import.meta.env.VITE_API_KEY}&rating=${rating}&limit=${limit}`

  const res = await fetch(URL)
  const response = await res.json()
  const { data } = response
  const trendingGifs = data.map(gif => {
    const { id, title, images } = gif
    const { url } = images.downsized_medium
    return { id, title, url }
  })
  return trendingGifs
}
