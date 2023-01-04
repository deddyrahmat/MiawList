import React, {memo, useState, useEffect} from 'react'
import ApiCats from 'config/Endpoint/cats'

const CardList = memo(({data}) => {
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const prosesImage = async () => {
        setIsLoading(true);
        try {
            const response = await ApiCats.imageList(data);

            if (response) {
                setDataCats(response);
                setIsLoading(false);
            }
        } catch (error) {
            console.log("Your System ", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        prosesImage();
    }, []);
    // console.log('data', data)
    // console.log('dataCats list image in car', dataCats)
  return (
    <>
        <p className='text-md lg:text-xl font-bold mt-5 mb-3'>More Images : </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                dataCats.length > 0 ? (
                    dataCats.map(cat => {
                        return (
                            <div className="border rounded-lg border-2 p-5 flex flex-col w-full h-full">
                                <img src={cat.url} alt={cat.url} className="object-cover object-center w-full h-full" />
                            </div>
                        )
                    })
                ) : (
                    <p className='text-3xl font-bold text-red-500'>Image Not Found</p>
                )
            }

        </div>
    </>
  )
});

export default CardList