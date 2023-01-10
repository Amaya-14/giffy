import React from 'react'
import { Link } from 'wouter'

export default function Terms({ terms }) {
  return (
    <ul className='flex flex-wrap gap-2 mb-6'>
      {terms.map((term) => (
        <li
          key={term}
          className='bg-slate-700 text-white py-1 px-2 rounded-md hover:scale-105'>
          <Link
            to={`/giffy/search/${term}`}
            className=''>
            #{term}
          </Link>
        </li>
      ))}
    </ul>
  )
}
