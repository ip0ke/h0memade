var weather = require('weather-js');
var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require('sequelize');
var sequelize = new Sequelize('homemade', 'weather', '123456');
var app = express();


var minutes = 1,
    the_interval = minutes * 60 * 1000;
setInterval(function() {
    console.log("I am doing my 5 minutes check");
    // do your stuff here
    // Options: 
    // search:     location name or zipcode 
    // degreeType: F or C 
    weather.find({
        search: 'Wien , AT',
        degreeType: 'C'
    }, function(err, result) {
        if (err) console.log(err);

        //console.log(JSON.stringify(result, null, 2));
    });
}, the_interval);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/weather', function(req, res) {
    var city = req.param('city');
    console.log("City = " + city);
});
/*app.post('/wetter', function(req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.end("yes");
});*/
app.listen(3000, function() {
    console.log("Started on PORT 3000");
})

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }))
});