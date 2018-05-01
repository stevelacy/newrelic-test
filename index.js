require('newrelic')
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const { Item } = require('./db')

const app = express()
const port = 4949

app.use(bodyParser.json({ limit: '50mb' }))

app.get('/items', (req, res) => {
  Item.findAll()
    .then((items) => {
      res.json(items)
    })
    .catch(res.end)
})

app.post('/items', (req, res) => {

  const previous = Item.findOne({
    order: [ [ 'createdAt', 'DESC' ] ]
  })
    .then((prev) => {
      const body = req.body
      body.previous = String(prev && prev.id || 0)
      const item = Item.build(body)
      // slow function here:
      setTimeout(() => {
        item.save()
          .then((doc) => res.send(doc))
          .catch(res.end)
      }, 500)
    })
    .catch(res.end)
})

const httpServer = http.createServer(app).listen(port)
console.log('starting on port', port)
