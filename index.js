const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000
app.use(bodyParser())
app.use(cors())

var repairs=[]

app.get('/t', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send('Hello Max!!!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Backend listening at port 80`)
})

app.post('/calculate', (req, res) => {
  /*let info=req.body.data.info
  let start=info.startDate
  let finish=info.endDate*/
  console.log(req.body) 

  repairs.push(req.body.data)

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.send(req.body)
})