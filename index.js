const express = require('express')
const app = express()
const port = 3000

app.get('/t', (req, res) => {
  res.send('Hello Liviu!!')
})

app.listen(process.env.port || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
