function show(){
    console.log("Running...");
    let pass=document.getElementById("showpass");
    if(pass.type=="password"){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
}