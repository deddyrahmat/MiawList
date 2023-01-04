import React, {useState, useEffect} from 'react';
import {  FaSpinner } from "react-icons/fa";

import ApiCats from 'config/Endpoint/cats'

function ImageHeader({id}) {
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const prosesImage = async () => {
        setIsLoading(true);
        try {
            const response = await ApiCats.imageHeader(id);

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
    // console.log('dataCats image', dataCats)
  return (
    <>
        {
            isLoading ? (<FaSpinner className='animate-spin mx-auto' size={30} />) : (
                <div className="w-[300px] md:w-[400px] border rounded-lg border-2 p-5">
                    <img src={dataCats.url} alt="cat" className="w-full h-full object-cover object-center" />
                </div>
            )
        }
    </>
  )
}

export default ImageHeader