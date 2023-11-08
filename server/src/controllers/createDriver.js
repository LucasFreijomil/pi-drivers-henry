const { Driver } = require("../db");

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

    await newDriver.addTeam(teams);

    return res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createDriver;
