const axios = require("axios");
const { Driver, Team } = require('../db');

const URL = "http://localhost:5000/drivers";

const getAllDrivers = async (req, res) => {
  try {
    const apiResponse = await axios.get(URL);

    const apiDrivers = apiResponse.data;
    const dbResponse = await Driver.findAll({include: {model: Team, attributes: ["name"], through: {attributes: []}}});
    const dbDrivers = dbResponse.map((driver) => {
      const teamsArray = driver.Teams.map((team) => {
        return { name: team.name };
      });
    
      return {
        id: driver.id,
        name: {
          forename: driver.forename,
          surname: driver.surname,
        },
        image: driver.image,
        dob: driver.dob,
        nationality: driver.nationality,
        teams: teamsArray.map((team) => team.name).join(", "),
        description: driver.description,
      };
    });

    const allDrivers = [...apiDrivers, ...dbDrivers]

    return res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllDrivers;