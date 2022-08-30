require("dotenv").config();
const express = require("express");
const app = express();

const cors = require('cors')
const dbConnect = require('./src/db')

const route = require('./src/routes/index.route')



const port = process.env.PORT || 3000;
app.use(cors())
//connect database
dbConnect()
// app.get("/user",verify, (req, res) => {
//     console.log('request')
//   return res.status(200).json({ message: "hello" });
// });



app.post("/post/user",  (req, res) => {
  const id = req.query.docId;
  const username = req.body.name;
  const surname = req.body.surname;

  // insert to database

   res.status(200).json({
    message: "register successfully",
    status: "200",
  });
});

app.use('/api',route)

app.listen(port, () => console.log(`server running at ${port}`));
