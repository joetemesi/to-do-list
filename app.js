// Import required modules
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// Define a route
app.get('/', (req, res) => {

  var today = new Date();
  var currentDate = today.getDay();
  var day = "";

//   if (currentDate === 0 || currentDate === 6){
//     day = "weekend";
//   } else {
//     day = "weekday";
//   }

  switch (currentDate) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;    
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day= "Saturday";
        break; 
    default:
        console.log(currentDate);
  }
  console.log(currentDate); 

  res.render("list", {
    dayDate: day
});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
