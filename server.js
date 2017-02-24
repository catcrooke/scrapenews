// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

// Bring in our Models: Article and User
var Article = require("./models/article.js");
var User = require("./models/User.js");
var db = require("./connection.js");
// Import routes and give the server access to them.
// require("./routes/routes.js")(app);
// scraper may need (app) 
var scraper = require("./scraper.js")(app);

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up a static folder (public) for our web app
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
