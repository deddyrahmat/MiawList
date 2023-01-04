import React, {useState, useEffect, useCallback} from 'react';
import { FaSpinner } from "react-icons/fa";

import ApiCats from 'config/Endpoint/cats'
import Card from 'components/molecules/Card';
import Buttons from 'components/atoms/Buttons';
import Search from 'components/molecules/Search';

function ListImages() {
    
    const [limit, setLimit] = useState(10);
    // const [page, setPage] = useState(0);
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [isLoadingSearch, setIsLoadingSearch] = useState(false);
    const [statusSearch, setStatusSearch] = useState("");

    const handleKeyword = useCallback((e) => {
        setKeyword(e.target.value);
    },[])

    const handleKeywordKeydown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        setIsLoadingSearch(true);
        try {
            const response = await ApiCats.search(keyword);

            if (response.length > 0 ) {
                setDataCats(response);
                setIsLoadingSearch(false);
            }else{
                setDataCats([]);
                setIsLoadingSearch(false)
                setStatusSearch("Cats Not Found")
            }
        } catch (error) {
            console.log("Your System ", error);
            setIsLoadingSearch(false);
        }
    }
    

    const prosesList = async () => {
        setIsLoading(true);
        try {
            const response = await ApiCats.limit(limit, 0);

            if (response) {
                setDataCats(response);
                setIsLoading(false);
                setStatusSearch("");
            }
        } catch (error) {
            console.log("Your System ", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        prosesList();
    }, [limit]);

    const handleLimit = useCallback(() => {
        setLimit(limit + 10)
    },[limit])

    

    // console.log('dataCats', dataCats)
  return (
    <>
        <Search handleKeywordKeydown={handleKeywordKeydown} handleKeyword={handleKeyword}  handleSearch={handleSearch}  isLoadingSearch={isLoadingSearch} />
        
        <div className="container mx-auto my-10 px-2">
            {statusSearch && (
                <>
                    <p className='text-red-600 text-2xl  lg:text-4xl font-bold mb-5 text-center'>{statusSearch}</p>
                    <Buttons onClick={() => prosesList()} className='mt-3 bg-sky-400 rounded-lg text-white p-2 text-lg shadow block text-center w-5/12 lg:w-3/12 mx-auto'>Back to home</Buttons>
                </>
            )}
            <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
                {
                    dataCats?.length > 0 && (
                        dataCats.map((cat, index) => 
                            <Card data={cat} key={index}/>
                        )
                    )
                }
            </div>
            {
                dataCats.length > 9 && (
                    <Buttons onClick={() => {handleLimit()}} isDisabled={isLoading} className={`mt-5 w-4/12 mx-auto block text-center flex-1 rounded-lg text-white py-2 text-xl font-bold ${isLoading ? 'bg-slate-400 pointer-events-none' : 'bg-sky-400'}`}>
                        {
                            isLoading ? (<FaSpinner className='animate-spin mx-auto' />) : ("Load More")
                        }
                    </Buttons>
                ) 
            }
        </div>
    </>
  )
}

export default ListImages