// const axios = require('axios');

// exports.getMapData = async (req, res) => {
//   try {
//     const { address } = req.query;
//     const apiKey = process.env.GOOGLE_MAPS_API_KEY;

//     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);

//     // Process the response and send the necessary data back to the client
//     // Example: Extract latitude and longitude from the response
//     const { lat, lng } = response.data.results[0].geometry.location;

//     res.json({ lat, lng });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
