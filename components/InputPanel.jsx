"use client"

import React, { useState, useRef } from 'react'
import InputResults from './InputResults';
import validator from 'validator'
// import Image from 'next/image'
// import { Link } from 'react-scroll';


const InputPanel = ({ inputRef }) => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // input ref 

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isURL(value)) {
            setErrorMessage('Is Valid URL')
        } else {
            setErrorMessage('Is Not Valid URL')
        }
    }


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {

            const res = await fetch('/api/shorten', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input }),
            });
            const data = await res.json();
            console.log(data);
            setData((prev) => [...prev, data.result]);
            setInput("");
            setError(false);
            setLoading(false);
            // if input is empty disable button
            if (input === "") {
                return;
            }


        } catch (error) {
            setError(true);
        }

    }


    return (
        <>
            <section>

                <div className="py-10 px-10 bg-[url('/assets/hero-pattern.svg')] bg-[#3a3053] rounded-lg">
                    {/* // form with input and button flex input width 75% and button 25% */}
                    <form
                        className='space-y-5 flex-col md:flex-row md:space-x-[5%] flex-nowrap'
                        onSubmit={handleSubmit}


                    >

                        <input
                            type='text'
                            placeholder='Shorten a link here...'
                            // add border-red-500 if input is not valid

                            className={`required:border-red-500 w-full md:w-[70%] px-4 py-3 rounded-lg border-2 border-neutral-200 focus:outline-none  
                            ${!validator.isURL(input) ? 'text-red-500' : ''}
                            `}
                            value={input}
                            // onChange={(e) => setInput(e.target.value)}
                            // validate input
                            onChange={(e) => {
                                setInput(e.target.value)
                                validate(e.target.value)
                            }}

                            ref={inputRef}
                        />

                        <button
                            type='submit'
                            className={`w-full md:w-[25%] px-4 py-4 rounded-lg bg-teal-600 text-neutral-100 font-semibold shadow hover:bg-teal-700 }`}
                            // disable button if input is not valid
                            disabled={!validator.isURL(input)}

                        >
                            Shorten It!
                        </button>
                    </form>
                    {/* // if input is not valid show error message */}


                    {input.length > 0 && !validator.isURL(input) && <p className='text-red-500 text-sm'>{errorMessage}</p>}


                </div>
            </section>

            <div>
                <InputResults data={data} loading={loading} setLoading={setLoading} />
            </div>
        </>
    )
}

export default InputPanel