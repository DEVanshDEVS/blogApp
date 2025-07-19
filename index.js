const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

//import the route
const blog = require("./routes/blog")
//mount the route
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//assign port
app.listen(PORT, ()=>{
    console.log(`The APP is running on Port number ${PORT}.`);
});


//Default route
app.get("/",(req, res)=>{
    res.send(`<h1>This is the Homepage</h1>`)
});