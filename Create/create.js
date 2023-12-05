const show = document.getElementById('show');
show.addEventListener('click',()=>{
    console.log("Running...")
    let pass=document.getElementById("showpass");
    if(pass.type=="password")
        pass.type="text";
    else
        pass.type="password";
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore ,doc ,setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

let email="";
let password=0;
const eborder = document.querySelector('input[type=text]');
const pborder = document.querySelector('.password');
const error = document.querySelector('.error');

const button = document.getElementById("button");
button.addEventListener('click', async () => {
    console.log("Running...");
    var email1 = document.querySelector('input[type=text]');
    email = email1.value;
    var password2 = document.querySelector('.password');
    password = password2.value;
    if(email === "" || password === ""){
        eborder.style.borderColor="rgb(216, 47, 36, 1)";
        pborder.style.borderColor="rgb(216, 47, 36, 1)";
        error.innerHTML = "Invalid feilds"
        error.style.color = "red";
        email1.value='';
        password2.value='';
    }
    else{
        const docRef = doc(db, "Login", email);
        try {
            await setDoc(docRef, { password: password });
            console.log("Document written with ID: ", docRef.id);
            eborder.style.borderColor="rgb(18, 173, 18)";
            pborder.style.borderColor="rgb(18, 173, 18)";
            error.innerHTML = "Created successfully"
            error.style.color = "rgb(18, 173, 18)"
        } catch (error) {
            console.error("Error writing document: ", error);
            eborder.style.borderColor="rgb(216, 47, 36, 1)";
            pborder.style.borderColor="rgb(216, 47, 36, 1)";
            error.innerHTML = "Invalid feilds"
            error.style.color = "red";
            email1.value='';
            password2.value='';
        }
    }
});

