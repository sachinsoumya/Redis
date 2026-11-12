const User = require("../model/user");

const client = require("../redis/Client");

const getAllUsers = async (req, res) => {
  try {
    const cacheResults = await client.get("users:all");

    console.log(cacheResults);

    if (cacheResults) {
      return res.json({
        message: "Data fetched from cache",
        data: JSON.parse(cacheResults),
      });
    }

    const users = await User.find({});
    const response = await client.set("users:all", JSON.stringify(users));

    const cacheResultsExpires = await client.expire("users:all", 180);

    console.log(response);
    console.log(cacheResultsExpires);

    res.json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    res.send("Error" + " " + err.message);
  }
};

const getAUser = async (req, res) => {
  try {
    // const { email } = req.body;

    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).send("user not found");
    }

    res.json({
      message: "user fetched successfully",
      data: user,
    });
  } catch (err) {
    res.send("Error" + " " + err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age, address } = req.body;

    const user = new User({
      name,
      email,
      age,
      address,
    });

    await user.save();
    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    res.send("Error" + " " + err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;

    const { id } = req.params;

    const updatedUser = await User.findOneAndUpdate({ _id: id }, data, {
      returnDocument: "after",
    });

    if (!updatedUser) {
      res.status(404).send("user not found");
    }

    res.json({
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.send("Error" + " " + err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findOneAndDelete({
      _id: id,
    });
    res.json({
      message: "user deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    res.send("Error" + " " + err.message);
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  createUser,
  updateUser,
  deleteUser,
};
