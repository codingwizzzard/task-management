const database = require("./config/database");
const express = require("express");
const Config = require("./config");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes  = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const helmet = require("helmet");
const dotenv = require("dotenv");
const app = express();

app.use(cors({
  origin: [`${process.env.FRONTEND_URL}`, 'http://localhost:3000'],
  credentials: true
}));
dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

 // OUR ROUTES
app.use("/api/users",userRoutes );
app.use("/api/tasks",taskRoutes);


const PORT = Config.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.listen(PORT, () => {
  database();
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
