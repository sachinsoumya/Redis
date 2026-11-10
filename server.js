const express = require("express");

const axios = require("axios");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/user");

// const client = require("./Client");

const connectDB = require("./config/database");

app.use("/api/user" , userRoutes);

// app.get("/", async (req, res) => {
//   try {
//     const cacheResults = await client.get("users");

//     if (cacheResults) {
//       res.json({
//         message: "data fetched from cache",
//         data: JSON.parse(cacheResults),
//       });
//     }

//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users",
//     );
//     console.log(data);

//     const response = await client.set("users", JSON.stringify(data));

//     console.log(response);

//     await client.expire("users", 100);

//     res.json({
//       message: "data fetched successfully",
//       data: data,
//     });
//   } catch (err) {
//     res.send("Error " + " " + err.message);
//   }
// });




connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(7777, (req, res) => {
      console.log("server is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err.message);
  });
