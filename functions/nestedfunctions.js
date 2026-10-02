// nested function

function outerFunction() {

    function innerFunction() {
        console.log("Hello");
    }

 }
// supermarket example

function processOrder() {

    function calculateTotal() {
        // calculate total
    }

    function calculateDiscount() {
        // calculate discount
    }

}

// inner function can access outer function
function supermarket() {

    const customerName = "John";

    function greetCustomer() {
        console.log("Welcome " + customerName);
    }

    greetCustomer();
}

supermarket();
// inner function can use outer parameters too
function greetCustomer(name) {

    function message() {
        console.log("Welcome " + name);
    }

    message();
}

greetCustomer("John");

// mutiple nested functions
function supermarket() {

    function calculateTotal() {
        console.log("Calculating total...");
    }

    function calculateDiscount() {
        console.log("Calculating discount...");
    }

    calculateTotal();
    calculateDiscount();
}

supermarket();

// Main function
// This function handles the entire visitor ticket process.
function processVisitor(visitorName, age, ticketType) {

    // This variable belongs to the outer function.
    const parkName = "Ridgeways Theme Park";

    // Nested function 1
    // Checks whether the visitor is a child or an adult.
    function checkAge() {

        if (age < 13) {
            return "Child";
        } else {
            return "Adult";
        }
    }

    // Nested function 2
    // Calculates the ticket price based on the ticket type.
    function calculateTicketPrice() {

        if (ticketType === "Regular") {
            return 2000;
        } else if (ticketType === "VIP") {
            return 5000;
        } else {
            return 0;
        }
    }

    // Nested function 3
    // Prints the visitor's ticket information.
    function printTicket() {

        // The nested function can access variables
        // from the outer processVisitor function.
        console.log(`Welcome to ${parkName}`);
        console.log(`Visitor: ${visitorName}`);
        console.log(`Age: ${age}`);
        console.log(`Category: ${checkAge()}`);
        console.log(`Ticket: ${ticketType}`);
        console.log(`Price: KSh ${calculateTicketPrice()}`);
    }

    // Call the nested function.
    printTicket();
}

// Call the main function.
processVisitor("John", 23, "VIP");