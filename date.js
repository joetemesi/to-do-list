function myDate () {

  const today = new Date();
//   var currentDate = today.getDay();
  

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };

  const day = today.toLocaleDateString("en-us", options);
  return day;
}

function myYear() {  
  const today = new Date();

  const year = today.getFullYear();
  return year;
}

module.exports = {
  myDate: myDate,
  myYear: myYear
}