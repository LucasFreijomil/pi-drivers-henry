const axios = require("axios");
const { Driver, Team } = require("../db");
const {formatDate} = require("../utils/formatDate")
const URL = "http://localhost:5000/drivers";

const getDriverDetail = async (req, res) => {
  const { idDriver } = req.params;

  try {
    const dbResponse = await Driver.findByPk(idDriver, {
      include: { model: Team, attributes: ["name"], through: { attributes: [] } }
    });

    if (dbResponse) {
      const teamsArray = dbResponse.Teams.map((team) => {
        return { name: team.name };
      });

      const formattedDob = formatDate(dbResponse.dob);

      const dbDriver = {
        id: dbResponse.id,
        name: {
          forename: dbResponse.forename,
          surname: dbResponse.surname
        },
        image: {
          url: dbResponse.image
        },
        dob: formattedDob,
        nationality: dbResponse.nationality,
        teams: teamsArray.map((team) => team.name).join(", "),
        description: dbResponse.description
      };

      return res.status(200).json(dbDriver);
    } else {
      const apiResponse = await axios.get(`${URL}/${idDriver}`);
      const apiDriver = apiResponse.data;

      return res.status(200).json(apiDriver);
    }
  } catch (error) {
    if (error.response && error.response.status === 404)
      return res.status(404).json({ error: "Driver not found" });

    return res.status(500).send(error.message);
  }
};


module.exports = getDriverDetail;
