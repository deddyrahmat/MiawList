import React, {useState, useEffect} from 'react';

import ApiCats from 'config/Endpoint/cats'
import Card from 'components/molecules/Card';
import Buttons from 'components/atoms/Buttons';

function ListImages() {
    
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const prosesList = async () => {
        setIsLoading(true);
        try {
            const response = await ApiCats.limit(limit, page);

            if (response) {
                setDataCats(response);
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Your System ", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        prosesList();
    }, [limit]);

    const handleLimit = () => {
        setLimit(limit + 10)
    }

    // console.log('dataCats', dataCats)
  return (
    <>
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {
                    dataCats?.length > 0 && (
                        dataCats.map((cat, index) => 
                            <Card data={cat} key={index}/>
                        )
                    )
                }
            </div>
            <Buttons onClick={() => {handleLimit()}} isDisabled={isLoading} className={`mt-5 w-4/12 mx-auto block text-center flex-1 rounded-lg text-white py-2 text-xl font-bold ${isLoading ? 'bg-slate-400 pointer-events-none' : 'bg-sky-400'}`}>
                {
                    isLoading ? (<p>Loading...</p>) : ("Load More")
                }
            </Buttons>
        </div>
    </>
  )
}

export default ListImages