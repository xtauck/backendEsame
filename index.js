const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser())
app.use(cors())

var reservations = []

app.listen(process.env.PORT || port, () => {
  console.log(`Backend listening at port 80`)
})

app.post('/calculate', (req, res) => {
  let info = req.body.info
  let start = new Date(info.startDate)
  let finish = new Date(info.endDate)
  let carType = info.carType
  let cost=0
  console.log(req.body)
  let days= Math.ceil(Math.floor((finish - start) / (1000*60*60))/24)
  console.log(days)
  switch (carType) {
    case "Citycar":
      cost=50*days
      break
      case "Utilitaria":
      cost=75*days
      break
      case "Berlina":
      cost=110*days
      break
  }
  info.cost=cost
  reservations.push(info)
  let result={price: cost}
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send(result)
})