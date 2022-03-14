const express = require("express");
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
