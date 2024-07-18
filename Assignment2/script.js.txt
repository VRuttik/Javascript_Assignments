// 1] 

function myFunction() {
  let input = document.getElementById("month").value;
  let month = input.toLowerCase();

  switch (month) {
    case "september":
    case "october":
    case "november":
      document.getElementById("display1").innerHTML = "The season is Autumn";
      break;

    case "december":
    case "january":
    case "february":
      document.getElementById("display1").innerHTML = "The season is Winter";
      break;

    case "march":
    case "april":
    case "may":
      document.getElementById("display1").innerHTML = "The season is Spring";
      break;

    case "june":
    case "july":
    case "august":
      document.getElementById("display1").innerHTML = "The season is Summer";
      break;

    default:
      document.getElementById("display1").innerHTML = "Invalid month";
      break;
  }
}

// --------------------------------------------------
// 2]

function checkDay() {
  let input = document.getElementById("day").value;
  let day = input.toLowerCase();

  switch (day) {
    case "saturday":
    case "sunday":
      document.getElementById("display2").innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()} is a weekend.`;
      break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      document.getElementById("display2").innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()} is a working day.`;
      break;

    default:
      document.getElementById("display2").innerHTML = "Invalid day.";
      break;
  }
}

// ---------------------------------------------------------------------
// 3] 
function checkDaysInMonth() {
    let input = document.getElementById("month").value;
    let month = input.toLowerCase();

    let days;
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            days = 31;
            break;
        case "april":
        case "june":
        case "september":
        case "november":
            days = 30;
            break;
        case "february":
            days = 28;
            break;
        default:
            document.getElementById("display3").innerHTML = "Invalid month.";
            return;
    }

    document.getElementById("display3").innerHTML = `${input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()} has ${days} days.`;
}



