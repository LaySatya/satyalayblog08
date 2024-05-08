import { useState } from "react";
import RepairIMG from "../assets/images/repair.png";

function PopUp() {
    const [isOpen , setIsOpen] = useState(false);
    const [showAnimate , setShowAnimate] = useState("");
    function handlePopUp(){
        setIsOpen(!isOpen);
        setShowAnimate("animate__animated animate__backInDown");
    }
    function closeModal(){
        setIsOpen(false);
        setShowAnimate("");
    }
    return (
        <>
            <button onClick={()=> handlePopUp()} className='dark:text-white hover:bg-gradient-to-r from-green-300 to-blue-500 hover:text-white text-blue-500 border border-blue-500 rounded-lg px-3 hover:bg-blue-500 mt-5 p-2 transition-all lg:ml-0 ml-8'>Download CV</button>

            {
                isOpen ? (
                    <div
                    id="popup-modal"
                    className={`${showAnimate} backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full`}
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={()=> closeModal()}
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <i className="ri-close-large-fill"></i>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                               
                                <img src={RepairIMG} className="h-16 mx-auto mb-4" alt="under maintain"/>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    I will update this as soon as possible.
                                </h3>
                                <button onClick={()=> closeModal()}
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                >   
                                    Thank you
                                </button>
                                {/* <button
                                    data-modal-hide="popup-modal"
                                    type="button"
                                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    No, cancel
                                </button> */}
                            </div>
                        </div>
                    </div>
                    </div>
                ) : (isOpen)
            }
        </>
    );
}
export default PopUp;
