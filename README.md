# scrapenews
This assignment involves creating a web app that lets users leave comments on the latest news using Mongoose and Cheerio to scrape news from another site.

The user needs to be able to do the following with the app:
-Whenever a user visits the site, the app will scrape stories from a pre-selected news outlet The data should at least include a link to the story and a headline, but more content can be added database (photos, bylines, and so on).
Cheerio can grab the site content and Mongoose to save it to the MongoDB database.
All users can leave comments on the stories you collect. They should also be allowed to delete whatever comments they want removed. All stored comments should be visible to every user.
Mongoose's model system is used to associate comments with particular articles.