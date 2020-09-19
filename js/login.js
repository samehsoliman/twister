// dom loin page
var loginUsername = document.querySelector('.login-username input[type=text]');
var loginPassword = document.querySelector('.login-password input[type=password');
var loginBtn = document.querySelector('.login-btn input[type=submit]');
var loginError = document.querySelector('.login-error');


// login page
loginBtn.addEventListener('click', ()=>{
  if (loginUsername.value !="" && loginPassword.value != ""){
    window.location.replace('feed.html')
  } else {
    loginError.style.display = "block";
  }
})

