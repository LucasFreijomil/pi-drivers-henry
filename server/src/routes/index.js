const { Router } = require("express");
const getAllDrivers = require("../controllers/getAllDrivers");
const getDriverDetail = require("../controllers/getDriverDetail");
const getDriversByName = require("../controllers/getDriverByName");
const getAllTeams = require("../controllers/getAllTeams");
const createDriver = require("../controllers/createDriver");

const router = Router();

router.get("/drivers", getAllDrivers);
router.get("/drivers/:idDriver", getDriverDetail);
router.get("/driver", getDriversByName);
router.post("/create", createDriver);
router.get("/teams", getAllTeams);

module.exports = router;
