
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPtlthMlXzblwOmN2Hg34KO3UKgEFARIY",
  authDomain: "blogging-app-jawad.firebaseapp.com",
  projectId: "blogging-app-jawad",
  storageBucket: "blogging-app-jawad.appspot.com",
  messagingSenderId: "299034744596",
  appId: "1:299034744596:web:be0ba2d6918ff30997d401",
  measurementId: "G-1LCN3MQRXM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleBtn");
googleLogin.addEventListener("click", function() {
 signInWithPopup(auth, provider)
     .then((result) => {
         const user = result.user;
         console.log(user);
         window.location.href = "../../../createpost.html";
     })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
     });
});

function updateUserProfile(user) {
 const userName = user.displayName;
 const userEmail = user.email;
 const userProfilePicture = user.photoURL;

 document.getElementById("userName").textContent = userName;
 document.getElementById("userEmail").textContent = userEmail;
 document.getElementById("photoUrl").textContent = userProfilePicture;

 // Display the user's profile picture
 const imgElement = document.getElementById("userProfilePicture");
 imgElement.src = userProfilePicture;
 alert("user is there2")


}

// Call updateUserProfile when the user signs in
auth.onAuthStateChanged((user) => {
 if (user) {
     updateUserProfile(user);
     alert("user is there2")
 }
});
