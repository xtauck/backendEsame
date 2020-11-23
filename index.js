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
  let hours= Math.floor((finish - start) / (1000*60*60))
  console.log(hours)
  switch (carType) {
    case "Citycar":
      cost=50*hours
      break
      case "Utilitaria":
      cost=75*hours
      break
      case "Berlina":
      cost=110*hours
      break
  }
  info.cost=cost
  reservations.push(info)
  let result={price: cost}
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send(result)
})