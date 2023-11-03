const { Router } = require("express");
const getAllDrivers = require("../controllers/getAllDrivers");
const getDriverDetail = require("../controllers/getDriverDetail");
const router = Router();

router.get("/drivers", getAllDrivers);
router.get("/drivers/:idDriver", getDriverDetail);

module.exports = router;
