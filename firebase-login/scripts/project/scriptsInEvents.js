//   import { } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-SERVICE.js'

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";    
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
  
  
// firebase config & initialize
  const firebaseConfig =  {
    apiKey: "AIzaSyBG89BLDz27kf_3_mfwolx3ZGTbBoYF85w",
    authDomain: "practice-4d678.firebaseapp.com",
    projectId: "practice-4d678",
    storageBucket: "practice-4d678.appspot.com",
    messagingSenderId: "873118001818",
    appId: "1:873118001818:web:035bce48c23ef74b020d23",
    measurementId: "G-7KPGRCVVJD"
  };
  	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);
	  const auth = getAuth();







const scriptsInEvents = {

		async Es_login_Event1_Act4(runtime, localVars)
		{
			createUserWithEmailAndPassword(auth, runtime.globalVars.Email, runtime.globalVars.Password)
				  .then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);
					runtime.goToLayout("MainLayout")
				  })
				  .catch((error) => {
				  runtime.callFunction("hideLoader")
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log("Error: "+errorMessage+" Error_Code: "+errorCode)
				  });
		},

		async Es_login_Event2_Act2(runtime, localVars)
		{
			signOut(auth).then(()=>{ console.log("Signed Out"); runtime.callFunction("hideLoader")});
			
		},

		async Es_login_Event3_Act4(runtime, localVars)
		{
			
			signInWithEmailAndPassword(auth, runtime.globalVars.Email, runtime.globalVars.Password)
			  .then((userCredential) => {
			    // Signed in 
			    const user = userCredential.user;
				console.log("Logged in", user);
				
			    runtime.goToLayout("MainLayout")
			  })
			  .catch((error) => {
			  runtime.callFunction("hideLoader")
			    const errorCode = error.code;
			    const errorMessage = error.message;
				console.log("Error: "+errorMessage+" Error_Code: "+errorCode)
			  });
			  
		},

		async Es_login_Event4_Act1(runtime, localVars)
		{
				onAuthStateChanged(auth, (user) => {
			
				  if (user) {
					// User is signed in, see docs for a list of available properties
					// https://firebase.google.com/docs/reference/js/firebase.User
					const uid = user.uid;
					console.log("onAuthStateChanged:: ", user.email)
					runtime.goToLayout("MainLayout")
					// ...
				  } else {
					console.log("User is not signed in.");
					// ...
			
				  }
				});
			
		},

		async Es_main_Event19_Act1(runtime, localVars)
		{
			signOut(auth).then(()=>{
			runtime.goToLayout("LoginLayout");
			})
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

