import React from 'react'
import { Link } from 'wouter'

export default function Gif({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`}>
      <p>{title}</p>
      <img
        src={url}
        alt={title}
      />
    </Link>
  )
}
