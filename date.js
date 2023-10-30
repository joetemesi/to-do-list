const today = new Date();
//   var currentDate = today.getDay();
  

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };

  const day = today.toLocaleDateString("en-us", options);
  console.log(day); 

  const currentYearLatest = today.getFullYear();