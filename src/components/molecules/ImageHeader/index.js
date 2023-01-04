import React, {useState, useEffect, memo} from 'react';
import {  FaSpinner } from "react-icons/fa";
import Modal  from 'components/atoms/Modal';

import ApiCats from 'config/Endpoint/cats'

const ImageHeader = memo(({id}) => {
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
        <Modal open={open} handleClose={handleClose}>
            <div className="max-h-[80vh]">
                <img src={imageModal} alt={imageModal} className="object-contain object-center w-full h-full" />
            </div>
        </Modal>
        {
            isLoading ? (<FaSpinner className='animate-spin mx-auto' size={30} />) : (
                <div className="w-[300px] md:w-[400px] border rounded-lg border-2 p-5">
                    <img src={dataCats.url} alt="cat" className="w-full h-full object-cover object-center cursor-pointer" onClick={() => handleModal(dataCats.url)} />
                </div>
            )
        }
    </>
  )
});

export default ImageHeader