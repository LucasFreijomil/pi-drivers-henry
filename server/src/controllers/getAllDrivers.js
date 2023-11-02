const axios = require("axios");
const URL = "http://localhost:5000/drivers";

const getAllDrivers = async (req, res) => {
  try {
    const response = await axios.get(URL);
    const allDrivers = response.data;

    return res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllDrivers;
