import React from 'react'
import { Link } from 'wouter'

export default function Gif({ id, title, url }) {
  return (
    <Link
      to={`/giffy/gif/${id}`}
      className='relative w-full h-full'>
      <p className='absolute text-sm text-white bg-[rgba(0,0,0,0.3)] px-2 bottom-0'>{title}</p>
      <img
        className='object-cover h-full w-full'
        src={url}
        alt={title}
      />
    </Link>
  )
}
