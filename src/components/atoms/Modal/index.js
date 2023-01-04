import React from "react";
import propTypes from "prop-types";
import { MdClose } from "react-icons/md";

function Modal({handleClose, open, children}) {
    return (
        <>
            <div
                className={`${
                    open ? "flex" : "hidden"
                } w-full bg-slate-800 bg-opacity-50 justify-center items-center flex-col fixed top-0 right-0 bottom-0 left-0 z-50 overflow-hidden h-screen`}
            >
                <div className="relative w-full md:w-7/12 px-3">
                    <MdClose
                        className="mb-4 absolute top-[-30px] right-[10px] cursor-pointer bg-white rounded-full"
                        size={25}
                        onClick={() => {
                            handleClose();
                        }}
                    />
                    <div className="bg-white px-8 py-10 rounded-md ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;

Modal.propTypes = {
    handleClose : propTypes.func,
    open : propTypes.bool,
}