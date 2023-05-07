

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port =8002;
const sendMail = require('./routes/sendMail')
const meaasge = require('./routes/meaasge')
const app = express();
const uri = `mongodb+srv://moshiur:(masud422)@cluster0.oacn2vj.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("connected successfully");
});

app.use('/sendMail',sendMail)
app.use('/meaasge',meaasge)

mongoose
  .connect(uri)
  .then(() => console.log("DB is connected now"))
  .catch((err) => console.log("Not Connected", err));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
