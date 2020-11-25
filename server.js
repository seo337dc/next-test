const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id } 
    console.log("서버 사이드 실행", queryParams);
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/d/:id', (req, res) => {
    const actualPage = '/board'
    const queryParams = { id: req.params.id } 
    console.log("서버 사이드 실행2", queryParams);
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})