const axios = require('axios');

exports.getPets = async (req, res) => {
  try {
    const { type, limit } = req.query;
    const apiKey = process.env.PETFINDER_API_KEY;

    const response = await axios.get(
      `https://api.petfinder.com/v2/animals?type=${type}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
