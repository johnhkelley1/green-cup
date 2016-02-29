var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , bodyParser = require('body-parser');

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(bodyParser());
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

//Use bodyparser

app.get('/', function (req, res) {
  res.render('profile',
  { title : 'Profile' }
  )
})

app.get('/rank', function (req, res) {
  res.render('rank',
  { title : 'Rank' }
  )
})

app.get('/dorm', function (req, res) {
	var dorm = req.param('name') || "";
  res.render('dorm',
  { title : 'Dorm',dorm: dorm }
  )
})

app.get('/social', function (req, res) {
  res.render('social',
  { title : 'Social' }
  )
})



app.listen(8000);