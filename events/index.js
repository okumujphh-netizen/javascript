
const exploreButton = document.querySelector("#explore-button");
const message = document.querySelector("#message");
const eventsSection = document.querySelector("#events-section");
const searchInput = document.querySelector("#event-search");
const eventCards = document.querySelectorAll(".event-card");
const registerButtons = document.querySelectorAll(".register-button");

// EVENT 1: Click the Explore Events button
exploreButton.addEventListener("click", function () {
    message.textContent = "Let's find your next experience!";
    eventsSection.scrollIntoView({ behavior: "smooth" });
});

// EVENT 2: Search for events while typing
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    eventCards.forEach(function (card) {
        const eventName = card.querySelector("h3").textContent.toLowerCase();

        if (eventName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// EVENT 3: Register interest in an event
registerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const eventName = button.parentElement.querySelector("h3").textContent;

        button.textContent = "Interest Registered!";
        message.textContent = "You are interested in: " + eventName;
    });
});

