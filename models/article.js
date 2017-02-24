// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
var ArticleSchema = new Schema({
    // title: a string
    title: {
        type: String
    },
    // body: a string
    body: {
        type: String
    }
});

// Make an Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
