function validateForm() 
{
  let x = document.forms["regcontent"]["name", "email", "gender", "city", "address", "psw"].value;
  if (x == "") 
  {
    alert("Please fill out this field");
    return false;
  }
}
