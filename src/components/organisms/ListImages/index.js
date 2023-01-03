import React, {useState, useEffect} from 'react';

import ApiCats from 'config/Endpoint/cats'
import Card from 'components/molecules/Card';

function ListImages() {
    
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
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
    }, [page]);

    console.log('dataCats', dataCats)
  return (
    <>
        <Card />
    </>
  )
}

export default ListImages