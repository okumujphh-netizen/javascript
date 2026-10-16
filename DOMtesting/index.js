

function initEventHub(doc) {
    const welcomeButton = doc.querySelector("#welcome-button");
    const message = doc.querySelector("#message");
    const searchInput = doc.querySelector("#search");
    const eventCards = doc.querySelectorAll(".event-card");
    const registerButtons = doc.querySelectorAll(".register-button");

    welcomeButton.addEventListener("click", function () {
        message.textContent = "Welcome to EventHub!";
    });

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        eventCards.forEach(function (card) {
            const eventName = card.querySelector("h2").textContent.toLowerCase();

            card.hidden = !eventName.includes(searchTerm);
        });
    });

    registerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.textContent = "Interest Registered!";
        });
    });
}

// Run the same application code in the browser.
if (typeof document !== "undefined") {
    initEventHub(document);
}

// Export the function so Jest can test it in Node.js.
if (typeof module !== "undefined" && module.exports) {
    module.exports = { initEventHub };
}
