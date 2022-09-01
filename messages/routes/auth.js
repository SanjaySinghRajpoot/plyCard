const {
  getAllUsers,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/allusers/:id", getAllUsers);

module.exports = router;
