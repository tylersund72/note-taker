const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
