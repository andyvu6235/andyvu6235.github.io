var browserArray = [document.getElementById('Firefox'),document.getElementById('Edge'),document.getElementById('Chrome'),document.getElementById('Safari')]

function validate() {
  var isFirstNameValid = true;
  if(document.getElementById('Fname').value == "") {
    isFirstNameValid = false;
    document.getElementById('FirstNameValid').innerHTML = "<br>&#10060; Please Enter Your First Name:";
    document.getElementById('FirstNameValid').style.color="rgba(255, 0, 0, 0.7)";
  }
  else {
    document.getElementById('FirstNameValid').innerHTML = "<br>&check; Completed";
    document.getElementById('FirstNameValid').style.color="green";
  }

  var isLastNameValid = true;
  if (document.getElementById("Lname").value == "") {
    isLastNameValid = false;
    document.getElementById('LastNameValid').innerHTML = "<br>&#10060; Please Enter Your Last Name:";
    document.getElementById('LastNameValid').style.color="rgba(255, 0, 0, 0.7)";
  }
  else {
    document.getElementById('LastNameValid').innerHTML = "<br>&check; Completed";
    document.getElementById('LastNameValid').style.color="green";
  }

  var isEmailValid = false;
  var emailInput = document.getElementById("email").value;
  var mailformat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-zA-Z]+)(.[a-zA-Z]+)?$/;
  if (mailformat.test(emailInput)) {
    document.getElementById('EmailValid').innerHTML = "<br>&check; Completed";
    document.getElementById('EmailValid').style.color="green";
    isEmailValid = true;
  }
  else {
    isEmailValid = false;
    document.getElementById('EmailValid').innerHTML = "<br>&#10060; Please Enter Your Email:";
    document.getElementById('EmailValid').style.color="rgba(255, 0, 0, 0.7)";
  }

  if (isFirstNameValid == true && isLastNameValid == true && mailformat.test(emailInput)) {
    document.getElementById('error').innerHTML="&check; Your Form Has Been Submitted";
    document.getElementById('error').style.color="green";
  }
  else {
    document.getElementById('error').innerHTML="<br>&#10060; Missing Information On Form:"
  }
}

function resetForm() {
  document.getElementById('LastNameValid').innerHTML="";
  document.getElementById('FirstNameValid').innerHTML="";
  document.getElementById('EmailValid').innerHTML="";
  document.getElementById('error').innerHTML="";
}