import express from 'express'
const app = express()

app.use(express.static(__dirname))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT || 1337

const server = app.listen(PORT, () => {
  const port = server.address().port
  console.log('Listening at http://localhost:%s', port)
})