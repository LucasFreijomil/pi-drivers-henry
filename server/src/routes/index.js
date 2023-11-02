const { Router } = require("express");
const getAllDrivers = require ("../controllers/getAllDrivers");
const router = Router();

router.get("/drivers", getAllDrivers);

module.exports = router;