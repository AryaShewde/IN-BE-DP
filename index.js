const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
connectToMongo();
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNote Backend app listening on port http://localhost:${port}`)
})