const express = require("express");
const router = express.Router();

const stuffCtr = require("../controllers/stuffController");

router.post("/", stuffCtr.save);

router.get("/", stuffCtr.getStuff);

router.get("/:id", stuffCtr.getOneStuff);


router.put("/:id", stuffCtr.updateStuff);

router.delete("/:id", stuffCtr.deleteOneStuff);

module.exports = router;