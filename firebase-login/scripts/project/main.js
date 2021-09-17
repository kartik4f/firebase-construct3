
// Import any other script files here, e.g.:
// import * as script from "./script.js";
  // Import the functions you need from the SDKs you need


  
runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
// 	initializeFirebase();
console.log("hshucgsjbcjdvcjdcb");
	


	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}




	
	

