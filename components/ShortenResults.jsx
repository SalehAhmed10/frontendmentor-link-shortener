"use client"

import React, { useState } from 'react'


export default function Shorten() {
    // const [input, setInput] = useState('')
    // const [data, setData] = useState([]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const response = await fetch('/api/shorten', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ input }),
    //     })
    //     const data = await response.json()
    //     console.log(data)
    //     // setShorten(data.result.short_link)setData((prev) => [...prev, data]);
    //     setData(data.result.short_link)

    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // `https://api.shrtco.de/v2/shorten?url=${url}`
            // `https://api.shrtco.de/v2/shorten?url=${input}`
            const res = await fetch('/api/shorten', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input }),
            });
            const data = await res.json();
            setData((prev) => [...prev, data]);
            setUrl("");
            setError(false);
            console.log(data);
        } catch (error) {
            setError(true);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Shorten a link here..."
                />
                <button type="submit">Submit</button>
            </form>

            {
                data && data.map((item) => {
                    return (
                        <div key={item.result.code}>
                            <p>{item.result.original_link}</p>
                            <p>{item.result.full_short_link}</p>
                        </div>
                    );
                }
                )
            }


        </div>
    )
}
