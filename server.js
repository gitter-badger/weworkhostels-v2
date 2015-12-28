import express from 'express'
const app = express()

app.use(express.static(__dirname))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


const server = app.listen(1337, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Listening at http://%s:%s', host, port)
})