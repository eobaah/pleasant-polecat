# Simple Book Store
Goal #69

## Challenge Rubric

This goal will likely be within your ZPD if you…

Can build basic websites with HTML & CSS
Can add behavior to a website with JavaScript
Are familiar with SQL and relational databases like PostgreSQL
Are familiar with JavaScript promises
Are interested in building full-stack web applications with frameworks like Express
Are interested in learning CRUD (Create, Read, Update, Delete) relational database interactions
Are interested in server-side templating with tools like Pug or EJS

## Description

You’ve been tasked with building a web app for a local bookstore to help them manage their inventory.

Create a simple content management system that allows users to view, add, delete, and update books. Books entered in the system can be viewed in a list, as a single entry on its own page, or searched for using basic searches (by title, author, or genre).

To implement this system, you’ll need to use (among other things)…

a web application framework (we recommend Express)
a database (we recommend PostgreSQL)
a tool for server-side HTML templating (we recommend Pug)
Don’t sweat the UI design too much. If you want to add some quick and easy styles so that it doesn’t look too terrible, use a library like Bootstrap or Pure.css.

Also, don’t spend too much time coming up with book data if you need some seed data to work with. Use a fake data generator like Faker or just borrow a list from a data store like this CSV.

## Context

Many of the seemingly fancy apps on the web have functionality that can be reduced to just 4 simple operations: Create, Read, Update, and Delete (or CRUD for short). At their core, they are really just ways to perform these operations on some resource.

Writing a new tweet on Twitter? That’s a create operation.
Searching for photos tagged with #kittenmittens on Instagram? That’s a read operation.
Editing your profile information on LinkedIn? That’s an update operation.
Removing that 2am rant-post from Facebook? That’s a delete operation.
Like the steel frame of a skyscraper, CRUD is the skeleton around which web applications are built: it’s not very sexy, but you have to know how to do it.

In this goal, you’ll be applying the CRUD pattern to the real-world system of a bookstore.

## Specifications

- [ ] Books have a title, author, and genre
 Users can…
- [ ] Add books into the bookstore system via an admin page (create)
- [ ] See a list of books on the home page (read)
- [ ] Edit a book’s title, author, or genre (update)
- [ ] Delete a book from the bookstore (delete)
- [ ] Search for books by title OR by author OR by genre (read)
- [ ] View book details on a book detail page (read)
- [ ] Lists of books are always paginated in groups of 10
- [ ] Book detail view is linked to from the listing and search pages
- [ ] Search results are presented in a new page
- [ ] Appropriate HTTP verbs are used for CRUD actions
- [ ] GET requests are only used for read actions
- [ ] POST requests are only used for create actions
- [ ] PUT or PATCH requests are only used for update actions
- [ ] DELETE requests are only used for delete actions
- [ ] All views are rendered on the server using server-side - templates written with Pug or EJS
- [ ] Web server can be started with the command npm start
- [ ] Test suite can be run with the command npm test
- [ ] All code submissions are peer reviewed via GitHub PR by at least one other member of the team
- [ ] Master is always in a stable state (tests passing, site functions)
- [ ] The artifact produced is properly licensed, preferably with the MIT license.

## Stretch

- [ ] App is deployed and live on the web (consider using Heroku)
- [ ] All source code is written with ES6
- [ ] Users have their own account and can sign up and log in/out
- [ ] Users have one of three roles: admin, clerk, reader
- [ ] Users with role reader can only view and search for books
- [ ] Users with role clerk can edit books in addition to viewing/searching
- [ ] Users with role admin can perform all actions (create, read, update, delete) with books
- [ ] Books have a price, cover image, publisher, and ISBN number

## Quality Rubric

- [ ] Code is well formatted without any linting errors [25 points]
- [ ] Variables, functions, CSS classes, etc. are meaningfully named* [50 points]
- [ ] Functions are small and serve a single purpose [50 points]
- [ ] Code is well organized into a meaningful file structure [50 points]
- [ ] Code is reasonably tested with a test suite [50 points]
- [ ] Interface is user friendly [25 points]
* meaningfully named = no comments exist in code to explain functionality - the names serve that function.

## Resources

Guides and tutorials

Getting started and Guide sections of Express.js site
Building a Node.js REST API with Express
Designing a RESTful API With Node and Postgres
PostgreSQL and NodeJS
Building a Simple CRUD Application with Express and MongoDB - uses MongoDB instead of PostgreSQL, but the rest of it is still useful
Tools and libraries

SQL modeling designer: http://ondras.zarovi.cz/sql/demo/
Express as a lightweight web server framework
PostgreSQL for data persistence
Pug or EJS for server-side templating
Bootstrap or Pure.css for styling the UI
