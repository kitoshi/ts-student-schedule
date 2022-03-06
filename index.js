const express = require('express')
const app = express()
const port = 8081
const data = require('./courseslist.json')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/courselist', (req, res) => {
  res.send(data)
})

app.get('/courses', (req, res) => {
  res.sendFile(__dirname + '/courses.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
