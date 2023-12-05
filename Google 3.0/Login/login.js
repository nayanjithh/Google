let email='';
let password=0;
function check(){
    console.log("Running...");
    var email1=document.querySelector('input[type=text]');
    email=email1.value;
    var password2=document.querySelector('input[type=password]');
    password=password2.value;
    console.log(email,password);
    if(email=="Nayanjith"&&password=="9497"){
        console.log("welcome");
        window.location.href = "../Homepage/Homepage.html";
    }
    else{
        console.log('try again');
        const eborder=document.querySelector('input[type=text]');
        eborder.style.borderColor="rgb(216, 47, 36, 1)";
        const pborder=document.querySelector('input[type=password]');
        pborder.style.borderColor="rgb(216, 47, 36, 1)";
        email1.value='';
        password2.value='';
    }
}
function show(){
    console.log("Running...")
    let pass=document.getElementById("showpass");
    if(pass.type=="password")
        pass.type="text";
    else
        pass.type="password";
}