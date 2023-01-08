import React from 'react'

export default function Gif({ gif }) {
  console.log(gif)
  return (
    <a href={`#${gif.id}`}>
      <p>{gif.title}</p>
      <img
        src={gif.url}
        alt={gif.title}
      />
    </a>
  )
}
