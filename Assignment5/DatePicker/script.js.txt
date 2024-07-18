function myFunction1() {
  let x = document.getElementById("mydate").value;
  document.getElementById("display").innerHTML = x;
}

function myFunction2() {
  let date_value = document.getElementById("mydate").value;

  if (!date_value) {
    document.getElementById("display").innerHTML = "Please enter a date";
    return;
  }

  let dateArray = date_value.split("-");
  let year = dateArray[0];
  let month = dateArray[1];
  let day = dateArray[2];

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let formattedMonth = monthNames[parseInt(month) - 1];
  let date_format = document.getElementById("date2").value;

  let formattedDate;

  if (date_format === "ISO") {
    formattedDate = `${year}-${month}-${day}`;
  } else if (date_format === "Long") {
    formattedDate = `${day} ${formattedMonth} ${year}`;
  } else if (date_format === "Short") {
    formattedDate = `${year}/${month}/${day}`;
  }

  document.getElementById("display").innerHTML = formattedDate;
}

function myFunction3() {
  let date = document.getElementById("mydate").value;

  if (!date) {
    document.getElementById("future").innerHTML = "Please select a date first.";
    return;
  }

  let dateArray = date.split("-");
  let y = parseInt(dateArray[0]);
  let m = parseInt(dateArray[1]);
  let d = parseInt(dateArray[2]);

  let py = parseInt(document.getElementById("year").value);
  let pm = parseInt(document.getElementById("month").value);
  let pd = parseInt(document.getElementById("day").value);

  let futureDate = new Date(y, m - 1, d);

  futureDate.setFullYear(futureDate.getFullYear() + (py - y));
  futureDate.setMonth(futureDate.getMonth() + (pm - m));
  futureDate.setDate(futureDate.getDate() + (pd - d));

  let futureDay = futureDate.getDate();
  let futureMonth = futureDate.getMonth() + 1; // Months are zero-based
  let futureYear = futureDate.getFullYear();

  let complete_date = `${futureYear}-${futureMonth}-${futureDay}`;

  document.getElementById("future").innerHTML = complete_date;
}
