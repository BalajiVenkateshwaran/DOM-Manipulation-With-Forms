var submitBtnEl = document.getElementById("submitBtn");
var clearBtnEl = document.getElementById("clearBtn");

submitBtn.addEventListener("click", addData);

function addData() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var pin = document.getElementById("pin").value;
  var gender = document.getElementById("gender").value;

  var foodchoice1 = document.getElementById("foodchoice1").value;
  var foodchoice2 = document.getElementById("foodchoice2").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  document.getElementById("td1").textContent = fname;
  document.getElementById("td2").textContent = lname;
  document.getElementById("td3").textContent = address;
  document.getElementById("td4").textContent = pin;
  document.getElementById("td5").textContent = gender;
  document.getElementById("td6").textContent = foodchoice1;
  document.getElementById("td7").textContent = foodchoice2;
  document.getElementById("td8").textContent = state;
  document.getElementById("td9").textContent = country;
}

clearBtnEl.addEventListener("click", clearData);

function clearData() {
  var clrAction = document.contact - form.reset();
  return false;
}
