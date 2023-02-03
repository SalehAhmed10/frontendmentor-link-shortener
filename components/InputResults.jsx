import React from 'react'

import { ToastContainer, toast, Toaster } from 'react-hot-toast';



const InputResults = ({ data, loading, setLoading }) => {

    // react-hot-toast show notification when user click on copy button
    const notify = () => toast.success('Copied to clipboard!');
    // show toast from middle botom of the screen
    const toastOptions = {

        style: {
            border: '1px solid #713200',
            // background green color

            background: '#0f766e',
            padding: '16px',
            color: '#fff',
        },
    };

    // copy the value of the short link to clipboard and show toast notification
    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e.target.parentNode.previousSibling.textContent);
        notify();
    }





    return (
        <section>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={toastOptions}

            />
            {/* stylish hover bg color */}

            {/* <div className='mt-5 space-y-5 flex-1 
            '>
                {data.map((item) => (
                    <div className='py-5 px-5 rounded-md dark:[#121212] shadow-md hover:shadow-lg hover:bg-[#e5e7eb] dark:hover:bg-[#1f2937]' key={item.code}>

                        <div className='flex flex-col md:flex-row md:space-x-5 items-center '>
                            <div className='flex-1 font-bold'>
                                <p className='text-neutral-900 dark:text-neutral-100 '>{item.original_link}</p>

                            </div>
                            <div className='flex font-bold'>
                                <p className='text-neutral-900 dark:text-neutral-100 '>{item.short_link}</p>
                            </div>
                            <div className='flex'>

                                <button className='bg-[#0f766e] px-5 py-2 rounded-md text-white'>
                                    Click
                                </button>

                            </div>

                        </div>
                    </div>
                ))}
            </div> */}


            <div class="sm:mx-5 md:mx-0 px-5 flex flex-wrap mt-5 items-center py-5  rounded-md dark:[#121212] shadow-md hover:shadow-lg  font-semibold gap-y-4">
                {data ? (
                    <>
                        {data.map((item) => (
                            <>
                                <div class="w-full md:w-2/4  h-12 flex items-center">
                                    <a href={item?.original_link} target="_blank" rel="noreferrer"> {item?.original_link}</a>


                                </div>
                                <div class="w-full md:w-1/4 h-12 flex items-center">

                                    <a href={item?.short_link} target="_blank" rel="noreferrer" > {`https://${item?.short_link}`}</a>

                                </div>
                                <div class="w-full md:w-1/4 h-12">
                                    <button className='w-full md:min-w-fit bg-[#0f766e] shadow hover:bg-teal-700  rounded-md text-white h-12 flex justify-center items-center'
                                        onClick={copyToClipboard}

                                    >
                                        Copy
                                    </button>
                                </div>
                            </>
                        ))}

                    </>) : (
                    <>
                        <div class="w-full md:w-2/4  h-12 flex items-center">No data</div>
                    </>)}

            </div>
        </section>
    )
}

export default InputResults