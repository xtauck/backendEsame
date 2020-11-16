const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser())

app.get('/t', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send('Hello Max!!!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/calculate', (req, res) => {
  console.log(req.body)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send(req.body)
})