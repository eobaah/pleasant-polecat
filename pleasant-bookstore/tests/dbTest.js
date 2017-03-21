const expect = require("chai").expect;
const db = require("../database/db");

describe("Testing each SQL query", function() {
  it("getAll should return all books", function() {
    var allBooks  = db.getAll();

    expect(allBooks).to.equal();
  });
  it("should return '' if the number given is longer than the number of words in the sentence", function() {
    var twentyFirstWord  = db.getAllbyTitle('I want to go to sleep', 21);

    expect(twentyFirstWord).to.equal("");
  });
  it("should return '' if the number given is negative", function() {
    var negativeOne = db.getAllbyAuthor('I want to go to sleep', -1);

    expect(negativeOne).to.equal("");
  });

});
