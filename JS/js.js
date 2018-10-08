var slideIndex = 0;
showSlides();


function  showSlides(){
    var i;
    var slides = document.getElementsByClassName("slide");
    for(i = 0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}

//scroll menu
$(window).scroll(function(){
    if($(document).scrollTop() > 1){
        $('#header').addClass('shrink');
    }else{
        $('#header').removeClass('shrink');
    }
});

//show/hide album
function show_album(id,a,id2,a2,id3,a3){
    var div = document.getElementById(id);
    var div2=document.getElementById(id2);
    var div3=document.getElementById(id3);
    var av = document.getElementById(a);
    var av2 = document.getElementById(a2);
    var av3 = document.getElementById(a3);
    div2.style.display="none";
    div.style.display='block';
    div3.style.display = 'none';
    av.style.fontWeight="bold";
    av2.style.fontWeight='100';
    av3.style.fontWeight='100';
}

//Validate form


// message
var messages = {
    firstname : "Enter first name",
    lastname : "Enter last name",
    sex : "Choose a sex",
    check : "unchecked"
};
var mail = {
    empty : "Enter your email address",
    uncorect : 'Email must be in a valid email format (e.g., username@coolexample.com). Please try again.'
};
var pass_msg = {
    empty : "Enter a password",
    confirmEmpty : "Enter a confirm password",
    length : "Be at least 8 characters",
    Upper : "Include an Uppercase letter",
    number : "Include a Number",
    confirmNotEquals : "Confirm your password",
    confirmEmpty:"Enter a confirm password"
};
var regex_pass = {
    Upper : new RegExp("(?=.*[A-Z])"),
    Number : new RegExp("(?=.*[0-9])")
};

// get id form:
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var emails = document.getElementById('email');
var pass = document.getElementById('pass');
var confirms = document.getElementById('confirm');

//get id Error:

var er_name = document.getElementById('er_name');
var er_Sex = document.getElementById('er_Sex');
var er_email = document.getElementById('er_email');
var er_pass = document.getElementById('er_pass');
var er_confirm = document.getElementById('er_confirm');
var er_checkbox = document.getElementById('er_checkbox');

//reset error
function resetError(){
    fname.style.borderBottom = "1px solid rgba(0,0,0,.4)";
    lname.style.borderBottom= "1px solid rgba(0,0,0,.4)";
    email.style.borderBottom = "1px solid rgba(0,0,0,.4)";
    pass.style.borderBottom = "1px solid rgba(0,0,0,.4)";
    confirms.style.borderBottom = "1px solid rgba(0,0,0,.4)";
    er_name.style.marginLeft="0px";
    er_name.innerHTML = "";
    er_Sex.innerHTML = "";
    er_email.innerHTML = "";
    er_pass.innerHTML = "";
    er_confirm.innerHTML = "";
    er_checkbox.innerHTML = "";
}
//set error
function setError(input,error,message){
    input.style.borderBottom = "1px solid rgba(240, 16,0,0.8)";
    input.focus();
    error.innerHTML = message;
}

//validation
function checkAll(){
    var firstname = fname.value;
    var lastname = lname.value;
    if(firstname == ""){
        resetError();
        setError(fname,er_name,messages.firstname);
        return false;
    }else if(lastname == ""){
        resetError();
        er_name.style.marginLeft="185px";
        setError(lname,er_name,messages.lastname);
        return false;
    }else if(checkSex()==false){
        return false;
    }else if(checkMail()==false){
        return false;
    }else if(checkPass()==false){
        return false;
    }else if(checkConfirm()==false){
        return false;
    }else if(checkBox()==false){
        return false;
    }
    alert("Sign Up Successfully");
}

function checkSex(){
    var male = document.getElementById('Male').checked;
    var female = document.getElementById('Female').checked;
    var other = document.getElementById('Other').checked;

    if(male == false && female == false && other == false){
        resetError();
        er_Sex.innerHTML = messages.sex;
        return false;
    }
}


function checkMail(){
    var regex_mail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

    var email = emails.value;
    if(email == ""){
        resetError();
        setError(emails,er_email,mail.empty);
        return false;
    }
    else if(!regex_mail.test(email)){
        resetError();
        setError(emails,er_email,mail.uncorect);
        return false;
    }
}

function checkPass(){
    var password = pass.value;

    if(password == ""){
        resetError();
        setError(pass,er_pass,pass_msg.empty);
        return false;
    }else if(password.length<8){
        resetError();
        setError(pass,er_pass,pass_msg.length);
        return false;
    }else if(!regex_pass.Upper.test(password)){
        resetError();
        setError(pass,er_pass,pass_msg.Upper);
        return false;
    }else if(!regex_pass.Number.test(password)){
        resetError();
        setError(pass,er_pass,pass_msg.number);
        return false;
    }
}

function checkConfirm(){
    var password = pass.value;
    var confirmpass = confirms.value;

    if(confirmpass ==""){
        resetError();
        setError(confirms,er_confirm,pass_msg.confirmEmpty);
        return false;
    }else if(confirmpass != password){
        resetError();
        setError(confirms,er_confirm,pass_msg.confirmNotEquals);
        return false;
    }
}

function checkBox(){
    var checkbox = document.getElementById('check1').checked;

    if(checkbox == false){
        resetError();
        er_checkbox.innerHTML = messages.check;
        return false;
    }
}

 
