const { Driver, Team } = require("../db");

const createDriver = async (req, res) => {
  const { forename, surname, nationality, description, image, dob, teams } =
    req.body;

  try {
    const newDriver = await Driver.create({
      forename,
      surname,
      nationality,
      description,
      image,
      dob,
    });

    for (const teamName of teams) {
      const team = await Team.findOne({ where: { name: teamName } });
      if (team) {
        await newDriver.addTeam(team);
      }
    }

    return res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createDriver;
