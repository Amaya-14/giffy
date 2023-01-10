import React from 'react'
import Gif from '../Gif'
import Terms from '../Terms'

export default function ListOfGifs({ gifs, listTerm, listTitle }) {
  listTitle = listTitle.replaceAll('%20', ' ')
  return (
    <section className='mb-10'>
      <h2 className='text-white text-4xl font-bold mb-6'>{listTitle}</h2>

      <Terms terms={listTerm} />

      <div className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] grid-flow-row-dense gap-2'>
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            {...gif}
          />
        ))}
      </div>
    </section>
  )
}
