import React,{memo} from 'react'
import Buttons from 'components/atoms/Buttons';
import { FaSpinner,FaSearch } from "react-icons/fa";

const Search = memo(({handleKeywordKeydown,handleKeyword, handleSearch, isLoadingSearch}) => {
  // console.log('data search')
  return (
    <div className="relative w-full h-[300px] lg:h-[500px]">
        <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="background" className='object-cover object-center w-full h-full' />
        <div className="container mx-auto px-2 w-full lg:w-6/12 xl:w-5/12 absolute inset-1/2 -translate-y-2/4 -translate-x-2/4 flex justify-between align-center">
            <input type="text" className='px-2 py-1 w-9/12 mx-auto bg-white border h-12 md:rounded-lg shadow focus:outline-sky-400' onKeyDown={(event) => handleKeywordKeydown(event)} onChange={(event) => handleKeyword(event)} placeholder="Search name cat" />
            <Buttons isDisabled={isLoadingSearch} className={`text-white h-12 flex items-center md:rounded-lg text-lg px-5 font-semibold shadow ${isLoadingSearch ? 'bg-slate-400 pointer-events-none' : 'bg-sky-400'}`} onClick={() => handleSearch()}>
                {
                    isLoadingSearch ? (<FaSpinner className='animate-spin mx-auto' />) : (<div className="flex justify-center items-center space-x-2">
                      <FaSearch size={20} />
                      <span>Search</span>
                    </div>)
                }
            </Buttons>
        </div>
    </div>
  )
})

export default Search