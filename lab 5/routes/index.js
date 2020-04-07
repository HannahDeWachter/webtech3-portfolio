var express = require('express');
var router = express.Router();
const apiV1Messagesrouter = require('./routers/api/v1/messages')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use('/api/v1/messages', apiV1Messagesrouter)

module.exports = router;
