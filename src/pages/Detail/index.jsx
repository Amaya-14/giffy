import React from 'react'
import Gif from '../../components/Gif'
import Spinner from '../../components/Spinner'
import useSingleGif from '../../hooks/useSingleGif'

export default function Detail({ params }) {
  const { gif, isloading } = useSingleGif({ id: params.id })

  if (isloading) return <Spinner />

  return (
    <div className='mb-7'>
      <Gif
        {...gif}
        link={false}
      />
    </div>
  )
}
