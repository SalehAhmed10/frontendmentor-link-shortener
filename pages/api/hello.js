
// handle the request get the url and return the data from GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html


const getUrl = async (req, res) => {

  const { url } = req.query;

  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);

  const data = await response.json();

  res.status(200).json(data);

};

export default getUrl;