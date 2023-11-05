// Import required modules
const express = require("express");
const bodyParser = require("body-parser")
const currentDate = require(__dirname + "/date.js"); //import date module
const app = express();
const port = process.env.PORT || 3000

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = []; //initialize empty array
// var items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// Define a route
app.get('/', (req, res) => {

  const longYear = currentDate.myDate(); // Call the long date function

  const shortYear = currentDate.myYear(); // Call the short date function

  res.render("list", {
    listTitle: longYear, //ejs title year
    newListItems: items,
    currentYear:shortYear //ejs footer year
});

});

app.post("/", function(req, res){


    let item = req.body.newItem;

    console.log(req.body);
    if (req.body.submit === "Work"){

      workItems.push(item);
      res.redirect("/work");

    } else{

      items.push(item);
      res.redirect("/");

    }

})

app.get("/work", function(req, res){

  
  const shortYear = currentDate.myYear();
  
  res.render("list", {
    listTitle: "Work list",
    newListItems: workItems,
    currentYear:shortYear //ejs footer year
  })
  
})


// Start the server
app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});
