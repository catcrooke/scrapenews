// // require express
var path = require("path");
var express = require("express");
var app = express();
	
var Article = require("../models/articleschema.js");
// var User = require("./models/userschema.js");

var db = require("../connection.js");
// // Routes
// // ======
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/landing_page_scraper/index.html"));
    });

    // // Route to see articles we have added
app.get("/scrape", function(req, res) {
    // Find all articles in the article collection with our article model
    article.find({}, function(error, doc) {
        // Send any errors to the browser
        if (error) {
            res.send(error);
        }
        // Or send the doc to the browser
        else {
            res.send(doc);
        }
    });
});
};




// // Route to see what user looks like without populating
// app.get("/user", function(req, res) {
//     // Find all users in the user collection with our User model
//     User.find({}, function(error, doc) {
//         // Send any errors to the browser
//         if (error) {
//             res.send(error);
//         }
//         // Or send the doc to the browser
//         else {
//             res.send(doc);
//         }
//     });
// });

// // New article creation via POST route
// app.post("/submit", function(req, res) {
//     // Use our article model to make a new article from the req.body
//     var newarticle = new article(req.body);
//     // Save the new article to mongoose
//     newarticle.save(function(error, doc) {
//         // Send any errors to the browser
//         if (error) {
//             res.send(error);
//         }
//         // Otherwise
//         else {
//             // Find our user and push the new article id into the User's articles array
//             User.findOneAndUpdate({}, { $push: { "articles": doc._id } }, { new: true }, function(err, newdoc) {
//                 // Send any errors to the browser
//                 if (err) {
//                     res.send(err);
//                 }
//                 // Or send the newdoc to the browser
//                 else {
//                     res.send(newdoc);
//                 }
//             });
//         }
//     });
// });

// // Route to see what user looks like WITH populating
// app.get("/populateduser", function(req, res) {
//     // Prepare a query to find all users..
//     User.find({})
//         // ..and on top of that, populate the articles (replace the objectIds in the articles array with bona-fide articles)
//         .populate("articles")
//         // Now, execute the query
//         .exec(function(error, doc) {
//             // Send any errors to the browser
//             if (error) {
//                 res.send(error);
//             }
//             // Or send the doc to the browser
//             else {
//                 res.send(doc);
//             }
//         });
// });
