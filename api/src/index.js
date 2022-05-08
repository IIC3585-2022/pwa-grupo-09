const express = require('express');
const app = express();
var cors = require("cors");
//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use(require('./routes/index'));



app.listen(3000);
console.log('Server on port 3000');