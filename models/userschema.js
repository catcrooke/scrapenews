// Require mongoose
var mongoose = require("mongoose");
var db = require("../connection.js");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
    // name: a unique String
    name: {
        type: String,
        unique: true
    },
    // articles property for the user
    articles: [{
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the article model
        ref: "Article"
    }]
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
