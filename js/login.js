document.getElementById('login-submit').addEventListener('click', function (){
//    console.log('clicked')
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
//    console.log(userEmail);

//get password
const passwordField = document.getElementById
('user-password');
const userpassword = passwordField.value;
if (userEmail == 'sontan@baap.com' && userpassword == 'secret'){
   window.location.href = 'banking.html';
}

});



//hendle deposit btn event

document.getElementById('deposit-button').addEventListener
('click', function () {
    console.log('deposit btn clicked');
})


