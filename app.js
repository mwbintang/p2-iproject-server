require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000
const routerUser = require('./router/userRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})