require('dotenv').config(); 

const express = require('express');
const cors = require('cors');

const authRoute = require("./routes/auth-route");
const guestRoute = require("./routes/guest-route");
const notFound = require('./middlewares/notFound');
const errorMiddleware = require('./middlewares/error');
const env = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/guest", guestRoute);


//not found
app.use(notFound)
// error
app.use(errorMiddleware)


const port = env.PORT 
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
