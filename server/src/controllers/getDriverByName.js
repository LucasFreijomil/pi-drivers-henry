const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");

const URL = "http://localhost:5000/drivers";

const getDriversByName = async (req, res) => {
  const { name } = req.query;
  try {
    const apiResponse = await axios.get(URL);
    const apiDrivers = apiResponse.data.filter((driver) =>
      driver.name.forename.toLowerCase().includes(name.toLowerCase())
    );

    const dbDrivers = await Driver.findAll({
      where: {
        firstName: {
          [Op.iLike]: "%" + name + "%",
        },
      },
    });

    if (apiDrivers.length === 0 && dbDrivers.length === 0) {
      return res.status(404).json({ error: "No drivers found" });
    }

    const allDrivers = [...apiDrivers, ...dbDrivers];

    return res.status(200).json(allDrivers.slice(0, 15));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getDriversByName;
