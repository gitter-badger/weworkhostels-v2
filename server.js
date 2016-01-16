import express from 'express'
import jade from 'jade'
const app = express()

// Set static assets directory
app.use(express.static(__dirname))

// Set Jade templates
app.set('views', __dirname + '/src/client/templates')
app.set('view engine', 'jade')

// Set routes
app.get('/*', (req, res) => {
  res.render('index')
})

// Start server
const PORT = process.env.PORT || 1337
const server = app.listen(PORT, () => {
  const port = server.address().port
  console.log('Listening at http://localhost:%s', port)
})