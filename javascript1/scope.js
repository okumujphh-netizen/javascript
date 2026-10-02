// GLOBAL SCOPE
// GLOBAL VARIABLE
// This is outside all functions,
// so it can be accessed by different functions.
const hospitalName = "Ridgeways Hospital";


// FUNCTION 1
function welcomePatient(patientName) {

    // This function can access hospitalName
    // because hospitalName is in the global scope.
    console.log(`Welcome ${patientName} to ${hospitalName}`);

}


// FUNCTION 2
function showHospitalInformation() {

    // This function can ALSO access hospitalName.
    console.log(`Hospital: ${hospitalName}`);
    console.log("Emergency services are available 24/7.");

}


// Calling the functions
welcomePatient("John");

showHospitalInformation();

// BLOCK SCOPE
// Global variable
const schoolName = "Ridgeways High School";

function checkGrade(mark) {

    if (mark >= 50) {

        // Block-scoped variable
        const result = "Pass";

        console.log(`${schoolName}: ${result}`);

    } else {

        // This is a DIFFERENT block.
        // This variable exists only inside this else block.
        const result = "Fail";

        console.log(`${schoolName}: ${result}`);
    }
}

checkGrade(75);
checkGrade(40);

//  FUNCTION SCOPE
function calculateCartTotal() {

    // This variable has FUNCTION SCOPE.
    // It only exists inside calculateCartTotal().
    let total = 0;

    // Add products to the total.
    total += 500;
    total += 1000;
    total += 300;

    // We can access total because we are
    // still inside the function.
    console.log(`Shopping cart total: KSh ${total}`);
}

// Call the function
calculateCartTotal();