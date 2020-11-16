const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser())
app.use(cors())

var repairs = []

app.get('/t', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send('Hello Max!!!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Backend listening at port 80`)
})

app.post('/calculate', (req, res) => {
  let info = req.body.info
  let start = new Date(info.startDate)
  let finish = new Date(info.endDate)
  let deviceType = info.device
  let cost=0
  console.log(req.body)
  let hours= Math.floor((finish - start) / (1000*60*60))
  console.log(hours)
  switch (deviceType) {
    case "PC Desktop":
      cost=30*hours
      break
      case "Tablet":
      cost=20*hours
      break
      case "Notebook":
      cost=50*hours
      break
  }
  info.cost=cost
  repairs.push(info)
  let result={price: cost}
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send(result)
})