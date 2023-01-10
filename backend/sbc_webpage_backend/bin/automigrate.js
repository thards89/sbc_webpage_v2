const path = require("path");

const app = require(path.resolve(__dirname, "../server/server"));

const ds = app.datasources.elephant;

ds.automigrate("blogs", function(err) {

if (err) throw err;

//initialize the data to be inserted

const blogs = [

{

name: "thatha",

title: "My first experience",

picture: "",

experience: "great",

date: new Date(),

},

{

    name: "thaia",

    title: "My second experience",
    
    picture: "",
    
    experience: "good",
    
    date: new Date(),

}

];

const count = blogs.length;

//for each row create the data

blogs.forEach(function(blog) {

app.models.blogs.create(blog , function(err, model) {

if (err) throw err;

console.log("Createdmodel");

count — ;

if (count === 0)

ds.disconnect();

});

});

});