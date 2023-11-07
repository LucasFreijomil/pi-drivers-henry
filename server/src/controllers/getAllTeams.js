const axios = require("axios");
const { Team } = require("../db");

const URL = "http://localhost:5000/drivers";

const getAllTeams = async (req, res) => {
  try {
    const { data } = await axios.get(URL);
    const teamSet = new Set();

    for (let i = 0; i < data.length; i++) {
      if (data[i].teams) {
        let teamDriver = data[i].teams.split(",");
        for (let j = 0; j < teamDriver.length; j++) {
          teamSet.add(teamDriver[j].trim());
        }
      }
    }

    const teamsArray = [...teamSet];

    if ((await Team.count()) === 0) {
      for (let team of teamsArray) {
        await Team.create({ name: team });
      }
    }

    res.status(200).json(teamsArray);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllTeams;
