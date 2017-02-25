// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");

var Article = require("./models/articleschema.js");
var User = require("./models/userschema.js");

module.exports = function(app) {


    // Making a request call for washington post. The page's HTML is saved as the callback's third argument
    request("https://www.washingtonpost.com", function(error, response, html) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(html);

        // An empty array to save the data that we'll scrape
        var result = [];

        // With cheerio, find each p-tag with the "title" class
        // (i: iterator. element: the current element)
        $("a").each(function(i, element) {

            // Save the text of the element (this) in a "title" variable
            var title = $(this).text();

            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            var link = $(element).attr("href");

            // Save these results in an object that we'll push into the result array we defined earlier
            result.push({
                title: title,
                link: link
            });

            var scrapeInfo = new Article({ title: title, link: link });
            // var Tank = mongoose.model('Tank', schema);

            scrapeInfo.save(function(err) {
                if (err) console.log(err);
                // saved!
                else {
                    console.log(scrapeInfo);
                }
            });

        });

        // Log the result once cheerio analyzes each of its selected elements
        console.log(result);

    });

};
