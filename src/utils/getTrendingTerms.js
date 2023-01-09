
export default async function getTrendingTerms() {
  const URL = `${import.meta.env.VITE_URL_TENDING_TERMS}api_key=${import.meta.env.VITE_API_KEY}`

  const res = await fetch(URL)
  const response = await res.json()
  const trendingTerms = response.data
  return trendingTerms
}
