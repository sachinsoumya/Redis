const express = require("express");

const axios = require("axios");

const app = express();

app.use(express.json());

const client = require("./Client");

app.get("/", async (req, res) => {
  try {
    const cacheResults = await client.get("users");

    if (cacheResults) {
      res.json({
        message: "data fetched from cache",
        data: JSON.parse(cacheResults),
      });
    }

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(data);

    const response = await client.set("users", JSON.stringify(data));

    console.log(response);

    await client.expire("users", 100);

    res.json({
      message: "data fetched successfully",
      data: data,
    });
  } catch (err) {
    res.send("Error " + " " + err.message);
  }
});

app.listen(7777, (req, res) => {
  console.log("server is listing on port 7777");
});
