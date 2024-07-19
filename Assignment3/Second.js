
function myFunction() {

  let input = document.getElementById("num").value;

  let year = parseInt(input);

  if (year <= 0 || year > 100) {
    document.getElementById("display1").innerHTML = `${year} is invalid Year`;
  } else {
    document.getElementById("display1").innerHTML = `${year} is valid Year`;
  }

  let leap_year;
  leap_year = parseInt(year / 4);
    
  let ordinary_year;
  ordinary_year = parseInt(year - leap_year);
  
  document.getElementById("display3").innerHTML = "Number of leap years: " + leap_year;

  document.getElementById("display4").innerHTML = "Number of Ordinary years: " + ordinary_year;



  let seconds;

  seconds = (leap_year * 366 * 24 * 60 * 60) + (ordinary_year *365 * 24 * 60 * 60);


  document.getElementById("display5").innerHTML = "Total seconds: " + seconds;
  
}
