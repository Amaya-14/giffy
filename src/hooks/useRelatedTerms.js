import { useEffect, useState } from 'react'
import getRelatedTerms from '../utils/getRelatedTerms'

export default function useRelatedTerms({ keyword }) {
  const [relatedTerms, setRelatedTerms] = useState([])
  const [isLoadingTerms, setIsLoadingTerms] = useState(false)

  useEffect(() => {
    setIsLoadingTerms(true)
    getRelatedTerms({ keyword }).then(terms => {
      setRelatedTerms(terms)
      setIsLoadingTerms(false)
    })
  }, [keyword])

  return { relatedTerms, isLoadingTerms }
}
