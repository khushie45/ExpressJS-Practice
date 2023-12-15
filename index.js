import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: "False" }));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.redirect("/register");
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("Server is running");
});
