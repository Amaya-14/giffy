import React from 'react'
import { Link } from 'wouter'

export default function Gif({ gif }) {
  return (
    <Link to={`/gif/${gif.id}`}>
      <p>{gif.title}</p>
      <img
        src={gif.url}
        alt={gif.title}
      />
    </Link>
  )
}
