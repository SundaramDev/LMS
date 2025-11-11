import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      navigate(`/course-list/${input}`)
    }
  }

  return (
    <form
      onSubmit={onSearchHandler}
      className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white 
      border border-gray-300 rounded-lg shadow-sm'
    >
      <img
        src={assets.search_icon}
        alt="search icon"
        className='w-10 md:w-auto px-3'
      />
      <input
        type="text"
        placeholder="Search for courses"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full h-full outline-none text-gray-600 
        placeholder-gray-400 px-2'
      />
      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 transition-all duration-200 
        rounded-lg text-white md:px-10 px-7 md:py-3 py-2 mx-1'
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
