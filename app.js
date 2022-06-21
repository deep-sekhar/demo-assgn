const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

// cors 
const cors = require("cors")
app.use(cors())

// get Mongoose connection string 
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// server routes
const AddData = require("./routes/AddData")
const GetData = require("./routes/GetData")
app.use("/api/add", AddData)
app.use("/api/get", GetData)

// static files nand routing on production 
// if(process.env.NODE_ENV == "production")
// {
//   console.log("in production")
//   const path = require('path')
//   const publicPath = path.join(__dirname, '/clientside/build');
//   app.use(express.static('clientside/build'))
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });
// }

// DATABASE
const connection =  require("./db/db")
connection();

//! start server 
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    console.log(`Server is running on port: ${port}`);
    if (err) console.log(err);
  });