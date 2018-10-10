const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/', routes)
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/**
 * 404 Error Catcher
 */
app.use(function (req, res, next) {
  let err = new Error('File Not Found')
  err.status = 404
  next(err)
})

/**
 * Error Handler, called when `next(err)` is called.
 */
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(JSON.stringify({
    status: err.status || 500,
    message: err.message
  }))
})


// listen on port `PORT`
app.listen(8080, function () {
  console.log('Express app listening on port ' + 8080)
})