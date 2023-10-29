// Import required modules
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = []; //initialize empty array
// var items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

var today = new Date();
//   var currentDate = today.getDay();
  var day = "";

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };

  var day = today.toLocaleDateString("en-us", options);
  console.log(day); 

  const currentYearLatest = today.getFullYear();

// Define a route
app.get('/', (req, res) => {

  

  res.render("list", {
    listTitle: day,
    newListItems: items,
    currentYear:currentYearLatest
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
  res.render("list", {
    listTitle: "Work list",
    newListItems: workItems,
    currentYear:currentYearLatest
  })
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
