import { useEffect, useState } from 'react'
import getRelatedTerms from '../utils/getRelatedTerms'

export default function useRelatedTerms({ keyword }) {
  const [relatedTerms, setRelatedTerms] = useState([])

  useEffect(() => {
    getRelatedTerms({ keyword }).then(setRelatedTerms)
  }, [keyword])

  return relatedTerms
}
