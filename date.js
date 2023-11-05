function myDate () {

  const today = new Date();
//   var currentDate = today.getDay();
  

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };

  return today.toLocaleDateString("en-us", options);
  
}

function myYear() {  

  const today = new Date();
  return today.getFullYear();

}

module.exports = {
  myDate: myDate,
  myYear: myYear
}