const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("emailID");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const cpassword = document.getElementById("password2");
//add event

form.addEventListener("submit", (event) => {
  event.preventDefault();  
  validate();
});
const sendData=(sRate,count) =>{
  if(sRate == count) {
    swal("Registration Done");  
  }
}
const successMsg=() => {
  let formCon=document.getElementsByClassName('form-control');
  var count= formCon.length - 1;
  for(i=0; i < formCon.length; i++){
    if(formCon[i].className === "form-control success"){
      var sRate=0 + i;
      sendData(sRate, count);
    }
    
  }
}

// more validate email
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 3) return false;
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 2) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phonenumberVal = phonenumber.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length < 2) {
    setErrorMsg(username, "username cannot be less than 3 char");
  } else {
    setSuccessMsg(username);
  }
  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not valid Email");
  } else {
    setSuccessMsg(email);
  }
  if (phonenumberVal === "") {
    setErrorMsg(phonenumber, "phone not vaild");
  } else if (phonenumberVal.length <= 10) {
    setErrorMsg(phonenumber, "phone not valid");
  } else {
    setSuccessMsg(phonenumber);
  }
  if(passwordVal === ""){
      setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length <= 5 ){
    setErrorMsg(password, "password length should not lessthan 6 digits");
  } else{
    setSuccessMsg(password);
  }
  if(cpasswordVal === ""){
    setErrorMsg(cpassword,"enter password again");
  }else if(cpasswordVal != passwordVal){
    setErrorMsg(cpassword," password not confrimed");
  }
  else{
    setSuccessMsg(cpassword);
  }
  successMsg();


  function setErrorMsg(input, errorMsg){
    const formControl= input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errorMsg;
  }
  function setSuccessMsg(input){
    const formControl= input.parentElement;
    formControl.className="form-control success";
    }
  


}
