require('dotenv').config(); 

const express = require('express');
const cors = require('cors');

const authRoute = require("./routes/auth-route");
const env = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);

const port = env.PORT 
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
