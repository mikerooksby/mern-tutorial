const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));