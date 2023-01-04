import React, {memo, useState, useEffect} from 'react'
import ApiCats from 'config/Endpoint/cats'
import {  FaSpinner } from "react-icons/fa";
import Modal from 'components/atoms/Modal';

const CardList = memo(({data}) => {
    const [dataCats, setDataCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [imageModal, setImageModal] = useState("");

    const handleModal = (data) => {
        setImageModal(data)
        handleClose();
    }
    const handleClose = () => {
        setOpen(!open);
    }
    
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
        <Modal open={open} handleClose={handleClose}>
            <img src={imageModal} alt={imageModal} className="object-cover object-center w-full h-full" />
        </Modal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            isLoading ? (
                <FaSpinner className='animate-spin mx-auto' size={40} />
            ) : (
                dataCats.length > 0 ? (
                    dataCats.map((cat, index) => {
                        return (
                            <div className="border rounded-lg border-2 p-5 flex flex-col w-full h-full cursor-pointer" key={index} onClick={() => handleModal(cat.url)}>
                                <img src={cat.url} alt={cat.url} className="object-cover object-center w-full h-full" />
                            </div>
                        )
                    })
                ) : (
                    <p className='text-3xl font-bold text-red-500'>Image Not Found</p>
                )
            )
        }
            

        </div>
    </>
  )
});

export default CardList