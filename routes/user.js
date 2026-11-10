const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getAUser
} = require("../controllers/userController");

router.get("/getAllUsers", getAllUsers);

router.get("/getAUser/:id", getAUser);

router.post("/createUser", createUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
