const { Router } = require("express");
import getAllDrivers from "../controllers/getAllDrivers";
const router = Router();

router.get("/drivers", getAllDrivers);

module.exports = router;
