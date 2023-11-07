const { Driver, Team } = require("../db");

const createDriver = async (req, res) => {
  const { firstName, lastName, nationality, description, image, dob, teams } = req.body;

  try {
    const newDriver = await Driver.create({
      firstName,
      lastName,
      nationality,
      description,
      image,
      dob,
    });

    if (teams && teams.length > 0) {
      for (let i = 0; i < teams.length; i++) {
        let foundTeam = await Team.findOne({ where: { name: teams[i] } });
        if (!foundTeam) {
          foundTeam = await Team.create({ name: teams[i] });
        }
        await newDriver.addTeam(foundTeam);
      }
    }

    return res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createDriver;

