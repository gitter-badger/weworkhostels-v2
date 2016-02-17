import express from 'express'
import jade from 'jade'
import path from 'path'

const app = express()

// Set static assets directory
// MUST set per route. Why? is there a more elegant solution?
app.use(express.static(__dirname))
app.use('/job', express.static(__dirname))

// Set Jade templates
app.set('views', path.join(__dirname, 'src/client/templates'))
app.set('view engine', 'jade')

// Set routes
app.get('/*', (req, res) => {
  res.render('index', {env: process.env.NODE_ENV})
})

app.param('uid', (req, res, next, id) => next())

app.get('/job/:uid', (req, res) => res.render('index', {env: process.env.NODE_ENV}))

// Start server
const PORT = process.env.PORT || 1337
const server = app.listen(PORT, () => {
  const port = server.address().port
  console.log('Listening at http://localhost:%s', port)
})
