// Import required modules
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var items = []; //initialize empty array

// Define a route
app.get('/', (req, res) => {

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

  res.render("list", {
    dayDate: day,
    newListItems: items
});

});

app.post("/", function(req, res){

    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
