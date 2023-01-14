const fromApiResponseToGifs = apiResponse => {
  const { data } = apiResponse
  const { id, title, images } = data
  const { url } = images.downsized_medium
  return { id, title, url }
}

export default async function getSingleGif({ ID }) {
  const URL = `${import.meta.env.VITE_URL_GIF_ID}/${ID}?api_key=${import.meta.env.VITE_API_KEY}`

  const res = await fetch(URL)
  const response = await res.json()
  console.log(response)
  return fromApiResponseToGifs(response)
}
