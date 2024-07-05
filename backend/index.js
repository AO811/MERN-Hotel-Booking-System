const express = require("express")
const mongoose = require("mongoose")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://CRUD:abasaksr@cluster0.sfek0t7.mongodb.net/hotelbookingdb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))

// app.use("/studentRoute",studentRoute);


app.listen(4000,()=>{
    console.log("Server is running in the port 4000");
})
