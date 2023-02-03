


// export default async function handler(req, res) {

//     // store the response from the API in a variable send the response back to the client


//     const { longUrl } = req.body;
//     const Api_URl = `https://api.shrtco.de/v2/shorten?url= `;
//     const response = await fetch(Api_URl + longUrl);
//     const data = await response.json();
//     console.log(data);
//     // if the response is not ok, send an error message to the client
//     if (!response.ok) {

//         return res.status(response.status).json({ error: data.error });
//     }

//     // if the response is ok, send the data to the client
//     res.status(200).json(data);





// }


export default async function handler(req, res) {

    // store the response from the API in a variable send the response back to the client


    const { input } = req.body;
    const Api_URl = `https://api.shrtco.de/v2/shorten?url=`;
    const response = await fetch(`${Api_URl}${input}`);
    const data = await response.json();
    console.log(data);
    // if the response is not ok, send an error message to the client
    if (!response.ok) {

        return res.status(response.status).json({ error: data.error });
    }

    // if the response is ok, send the data to the client
    res.status(200).json(data);





}




// Now, we have to create a component that will fetch the data from the API and display it on the page. Create a new file in the components folder and name it Shorten.js. Add the following code to the file.without axios 





