import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import useRelatedTerms from '../../hooks/useRelatedTerms'

export default function SearchResults({ params }) {
  const { keyword, rating } = params
  const gifs = useGifs({ keyword, rating })
  const relatedTerms = useRelatedTerms({ keyword })

  return (
    <ListOfGifs
      gifs={gifs}
      listTerm={relatedTerms}
      listTitle={keyword}
    />
  )
}
