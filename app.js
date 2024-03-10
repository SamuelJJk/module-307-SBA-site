var account = document.getElementById("info");

var loginBtn = document.getElementById("login"); 

var span = document.getElementsByClassName("close")[0];

loginBtn.onclick = function() {
  account.style.display = "block";
}

span.onclick = function() {
  account.style.display = "none";
}