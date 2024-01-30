require('dotenv').config(); 

const express = require('express');
const cors = require('cors');

const env = process.env;
const app = express();

app.use(cors());
app.use(express.json());

const port = env.PORT 
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
