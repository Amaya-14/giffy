export default async function getRelatedTerm ({ keyword } = {}) {
  const URL = `${import.meta.env.VITE_URL_RELATED_TERMS}/${keyword}?api_key=${import.meta.env.VITE_API_KEY}`

  const res = await fetch(URL)
  const response = await res.json()
  const { data } = response
  const relatedTerms = data.map(relatedTerm => {
    return relatedTerm.name
  })
  return relatedTerms
}
