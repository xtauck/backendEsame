const express = require('express')
const app = express()
const port = 3000
app.use(cors())
app.get('/t', (req, res) => {
  res.send('Hello Max!!!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
