
var express = require('express');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(express.logger('dev'));
app.use(express.compress());
app.get(/.*/, function(req, res) {
	res.redirect(301, "https://tdiary.github.io/tdiary-theme" + req.url);
});

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
