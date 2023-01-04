import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaSpinner } from "react-icons/fa";


import ApiCats from 'config/Endpoint/cats'
import ImageHeader from 'components/molecules/ImageHeader';
import CardList from 'components/molecules/CardList';
import Buttons from 'components/atoms/Buttons';

function DetailImage() {
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let { id } = useParams();
    
    const prosesDetail = async () => {
        setIsLoading(true);
        try {
            const response = await ApiCats.detail(id);

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
        prosesDetail();
    }, []);
    // console.log('dataCats', dataCats)
  return (
    <div className='border rounded-lg border-2 p-5 flex flex-col '>
        <Buttons href='/' type='link' className='mt-3 bg-sky-400 rounded-lg text-white p-2 text-lg shadow mb-10 w-6/12 md:w-5/12 lg:w-2/12'> 
            <div className='flex justify-center items-center space-x-3'>
            <FaChevronLeft fontSize={20} />
            Back to home
            </div>
        </Buttons>

        {isLoading ? (
            <FaSpinner className='animate-spin mx-auto' size={30} />
        ) : (
            <div className='px-2'>
            <div className="flex space-x-3 flex-col lg:flex-row">
                <ImageHeader id={dataCats.reference_image_id} />
                <div>
                    <div className="flex flex-col lg:flex-row space-x-3 text-md lg:text-xl font-bold">
                        <p>Name :</p>
                        <p>{dataCats.name}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row space-x-3 text-md lg:text-xl font-bold">
                        <p>Origin :</p>
                        <p>{dataCats.origin}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row space-x-3 text-md lg:text-xl font-bold">
                        <p>Temperament :</p>
                        <p>{dataCats.temperament}</p>
                    </div>
                </div>
            </div>
            
            <p className='text-md lg:text-xl font-bold mt-5'>Description : </p>
            <p className='mb-5 text-md lg:text-xl'>{dataCats.description}</p>
            <p className='text-md lg:text-xl font-bold mt-5'>Source : </p>
            <Buttons type="link" href={dataCats.wikipedia_url} isExternal={true} target="_blank" className="text-blue-400">- Wikipedia</Buttons>

            <CardList data={dataCats.id} />
            </div>
        )}
    </div>
  )
}

export default DetailImage