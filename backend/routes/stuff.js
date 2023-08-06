const express = require("express");
const router = express.Router();

const stuffCtr = require("../controllers/stuffController");
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');

router.post("/", auth,multer, stuffCtr.save);
router.get("/", auth, stuffCtr.getStuff);
router.get("/:id", auth, stuffCtr.getOneStuff);
router.put("/:id", auth,multer, stuffCtr.updateStuff);
router.delete("/:id", auth, stuffCtr.deleteOneStuff);

module.exports = router;