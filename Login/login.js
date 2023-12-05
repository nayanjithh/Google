const show = document.getElementById('show');
show.addEventListener('click',()=>{
    console.log("Running...")
    let pass=document.getElementById("showpass");
    if(pass.type=="password")
        pass.type="text";
    else
        pass.type="password";
});

const eborder = document.querySelector('input[type=text]');
const pborder = document.querySelector('.password');
const error = document.querySelector('.error');
//Data base

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqj9TNJKNIgtB3RITcOWVLzWexk2pTl0c",
  authDomain: "login-6120c.firebaseapp.com",
  databaseURL: "https://login-6120c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-6120c",
  storageBucket: "login-6120c.appspot.com",
  messagingSenderId: "895482428354",
  appId: "1:895482428354:web:82c2dc76c8da7c5c36f45b",
  measurementId: "G-N21DS13D4Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "Login"));


let email="";
let password=0;
const button = document.getElementById("button");
button.addEventListener('click', () =>{
    console.log("Running...");
    var email1=document.querySelector('input[type=text]');
    email=email1.value;
    var password2=document.querySelector('.password');
    password=password2.value;
    if(email === "" || password === ""){
        eborder.style.borderColor="rgb(216, 47, 36, 1)";
        pborder.style.borderColor="rgb(216, 47, 36, 1)";
        error.innerHTML = "Invalid feilds"
        email1.value='';
        password2.value='';
    }
    else{
        console.log('checking..')
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            
            if (doc.id == email && data.password == password) {
            window.location.href = "../Homepage/Homepage.html";
            console.log("WELCOME");
            }
            else{
                console.log("INVALID");
                eborder.style.borderColor="rgb(216, 47, 36, 1)";
                pborder.style.borderColor="rgb(216, 47, 36, 1)";
                error.innerHTML = "Invalid feilds"
                email1.value='';
                password2.value='';
            }
        });
    }
});