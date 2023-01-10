import React, { useState } from 'react'
import { useLocation } from 'wouter'

export default function SearchForm() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState('g')
  const [location, setLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword !== '') setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const handleChangeRating = (e) => {
    setRating(e.target.value)
  }

  return (
    <form
      className='flex justify-center'
      onSubmit={handleSubmit}>
      <div className='flex rounded-md overflow-hidden'>
        <button className='bg-indigo-700 hover:bg-indigo-600 text-white h-full px-2'>Búscar</button>
        <input
          type='text'
          placeholder='Búscar Gifs'
          onChange={handleChangeKeyword}
          className='pl-4 border-none w-full'
        />
        <select
          onChange={handleChangeRating}
          className='border-none pl-2 pr-[1.8rem]'>
          <option disabled>Rating</option>
          <option
            value='g'
            key='g'>
            g
          </option>
          <option
            value='pg'
            key='pg'>
            pg
          </option>
          <option
            value='pg-13'
            key='pg-13'>
            pg-13
          </option>
          <option
            value='r'
            key='r'>
            r
          </option>
        </select>
      </div>
    </form>
  )
}
