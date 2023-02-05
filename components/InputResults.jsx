
import { useEffect, useState } from "react";

import { ToastContainer, toast, Toaster } from 'react-hot-toast';


const ShortenedLink = ({ data }) => {

    const notify = () => toast.success('Copied to clipboard!');
    // show toast from middle botom of the screen
    const toastOptions = {
        // different styles for different types of toasts
        style: {
            border: '5px solid #4b3f6b',
            padding: '16px',
            color: '#white',
        },
        // duration in ms
        duration: 3000,
        // show toast from bottom
        position: 'top-center',
        // custom icon
        iconTheme: {
            primary: '#000',
            secondary: '#FFFAEE',

            size: 40,

        },



    };

    // 

    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        await navigator.clipboard.writeText(data.full_short_link);
        setCopied(true);
        notify();
    };



    useEffect(() => {
        if (!copied) return;

        const timeout = setTimeout(() => {
            setCopied(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [copied]);

    return (


        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:py-4 lg:px-5 bg-white dark:bg-[#232127] shadow-md hover:shadow-lg  rounded-md">

            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={toastOptions}

            />
            <a
                href={data?.original_link}
                target="_blank"
                rel="noreferrer noopener"
                className="block break-words font-medium dark:text-text hover:text-neutral-grayishViolet pt-5 pb-4 px-4 sm:px-6 lg:p-0 border-b-2 lg:border-none border-solid border-gray-200 transition-colors"
            >
                {data?.original_link}
            </a>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 pb-6 sm:py-5 px-4 sm:px-6 lg:p-0">
                <a
                    href={data.full_short_link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary-cyan hover:text-opacity-50 font-medium transition-colors"
                >
                    {data.full_short_link}
                </a>
                <button
                    onClick={copyLink}
                    className={`sm:w-28 text-white font-semibold py-3 px-8 sm:px-0 hover:bg-opacity-80 rounded-md transition-all ${copied ? "bg-neutral-darkBlue" : "bg-primary-cyan "
                        }`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default ShortenedLink;