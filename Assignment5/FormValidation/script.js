function myFunction1() {


  let a = document.getElementById("name").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("mobile").value;
  let d = document.getElementById("address").value;
  let e = document.getElementById("password").value;

  let name_length = a.length;
  let name_Array = a.split(" ");

  let name1 = name_Array[0];
  let n1 = name1.toString();

  let name2 = name_Array[1];
  let n2 = name2.toString();

  let name3 = name_Array[2];
  let n3 = name3.toString();

  if((n1[0] >= 'a' || n1[0] <= 'z') && (n2[0] >= 'a' || n2[0] <= 'z') && (n3[0] >= 'a' && n3[0] <= 'z')){
    alert("First Letter should start with Capital Letter");
    return false;
  }
  
  if (name_length < 12) {
    alert("Name should be atleast 12 characters long.");
    return false;
  }

  if (name_Array.length < 2) {
    alert("Name must be full Name");
    return false;
  }


  if(b.indexOf("@") == -1){
    alert("Invalid Email Address");
    return false;
  }

  if(c.length != 10 ){
    alert("Invalid Mobile Number");
    return false;
  }

  for(let i = 0; i < c.length; i++){
    if((c[i] < '0' || c[i] > '9') && (c[i] >= 'a' || c[i] <= 'z' || c[i] >= 'A' || c[i] <= 'Z')){
      alert("Invalid Mobile Number");
      return false;
    }
  }


  if(d.length < 10){
    alert("Invalid Address");
    return false;
  }

    if(e.length < 8) {
      alert("Password should be atleast 8 characters long.");
      return false;
    }

  let container = document.querySelector(".container");
  container.innerHTML = "<h3>Name: </h3>" + a + "<br>" + "<h3>Email Address: </h3>" + b + "<br>" +
    "<h3>Mobile No: </h3>" + c + "<br>" + "<h3>Address: </h3>" + d + "<br>" + "<h3>Password: </h3>" + e;

}

function myFunction2(){
  let x = "";
  document.querySelector(".container").innerHTML = x;
}
