const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default async function getGifs ({ keyword = 'pandas', rating = 'g', limit = 5 } = {}) {
  const URL = `${import.meta.env.VITE_URL_GIFS}api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&rating=${rating}&limit=${limit}`

  const res = await fetch(URL)
  const response = await res.json()
  return fromApiResponseToGifs(response)
}
