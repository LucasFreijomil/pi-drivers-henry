const axios = require("axios");
const { Driver } = require("../db");

const URL = "http://localhost:5000/drivers";

const getDriverDetail = async (req, res) => {
  const { idDriver } = req.params;

  try {
    const dbDriver = await Driver.findByPk(idDriver);

    if (dbDriver) {
      return res.status(200).json(dbDriver);
    } else {
      const apiResponse = await axios.get(`${URL}/${idDriver}`);
      const apiDriver = apiResponse.data;

      return res.status(200).json(apiDriver);
    }
  } catch (error) {
    if (error.response.status === 404)
      return res.status(404).json({ error: "Driver not found" });

    return res.status(500).send(error.message);
  }
};

module.exports = getDriverDetail;
