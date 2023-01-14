import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import useRelatedTerms from '../../hooks/useRelatedTerms'
import Spinner from '../../components/Spinner'
import Terms from '../../components/Terms'

export default function SearchResults({ params }) {
  const { keyword, rating } = params
  const { gifs, isLoading } = useGifs({ keyword, rating })
  const { relatedTerms, isLoadingTerms } = useRelatedTerms({ keyword })

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ListOfGifs
          listTitle={keyword}
          children={isLoadingTerms ? null : <Terms terms={relatedTerms} />}
          gifs={gifs}
        />
      )}
    </>
  )
}
