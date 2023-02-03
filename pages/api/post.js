export default async function handler(req, res) {
    const { input } = JSON.parse(req.body);

    const response = await fetch(Api_URl + input);
    const data = await response.json();
    console.log(data);
    // if the response is not ok, send an error message to the client
    if (!response.ok) {

        return res.status(response.status).json({ error: data.error });
    }

    // if the response is ok, send the data to the client
    res.status(200).json(data);

}

// Now, we have to create a component that will fetch the data from the API and display it on the page. Create a new file in the components folder and name it Shorten.js. Add the following code to the file.

// import React, { useState } from 'react'
// import axios from 'axios'
// import { useRouter } from 'next/router'
//
// export default function Shorten() {
//     const [input, setInput] = useState('')
//     const [shorten, setShorten] = useState('')
//     const router = useRouter()
//
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const response = await axios.post('/api/shorten', { input })
//         setShorten(response.data.result.short_link)
//     }
//
//     return (
//         <div className='flex flex-col items-center justify-center'>
//             <form
//                 onSubmit={handleSubmit}
//                 className='flex flex-col items-center justify-center'
//             >
//                 <input
//                     type='text'
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     className='w-96 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
//                 />
//                 <button
//                     type='submit'
//                     className='w-96 h-12 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
//                 >
//                     Shorten
//                 </button>
//             </form>
//             {shorten && (
//                 <div className='flex flex-col items-center justify-center mt-4'>
//                     <p className='text-gray-500'>Shorten Link</p>
//                     <a 

