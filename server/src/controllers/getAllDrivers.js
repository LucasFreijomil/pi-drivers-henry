const axios = require("axios");
const { Driver } = require("../models/Driver")

const URL = "http://localhost:5000/drivers";

const getAllDrivers = async (req, res) => {
  try {
    const apiResponse = await axios.get(URL);

    const apiDrivers = apiResponse.data;
    const dbDrivers = await Driver.findAll();

    const allDrivers = [...apiDrivers, ...dbDrivers]

    return res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllDrivers;