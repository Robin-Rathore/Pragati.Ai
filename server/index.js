import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { error } from "console";
import User from "./model/RegisterUser.js";


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: '*' }));
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });

/* Register and Login */
app.post('/login', (req, res) => {
  const {email, password} = req.body;
  User.findOne({email: email})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json(true)
      } else{
        res.json(false)
      }
    } else{
      res.json(false)
    }
  })
})

app.post(`/register`, (req, res) => {
  User.create(req.body)
  .then(User => res.json(User))
  .catch(err => res.json(err))
})

/* MOONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {

}).then(()=>{
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));
