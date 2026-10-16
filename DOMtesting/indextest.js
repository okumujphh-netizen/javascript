
/** @jest-environment jsdom */

const { initEventHub } = require("./index");

beforeEach(() => {
    document.body.innerHTML = `
    <button id="welcome-button">Show Welcome Message</button>
    <p id="message"></p>

    <input id="search" type="text">

    <section>
      <article class="event-card">
        <h2>Tech Conference</h2>
        <button class="register-button">Register Interest</button>
      </article>

      <article class="event-card">
        <h2>Music Festival</h2>
        <button class="register-button">Register Interest</button>
      </article>

      <article class="event-card">
        <h2>Design Workshop</h2>
        <button class="register-button">Register Interest</button>
      </article>
    </section>
  `;

    initEventHub(document);
});

test("clicking welcome button displays a message", () => {
    document.querySelector("#welcome-button").click();

    expect(document.querySelector("#message").textContent)
        .toBe("Welcome to EventHub!");
});

test("searching for Tech hides unrelated events", () => {
    const search = document.querySelector("#search");

    search.value = "Tech";
    search.dispatchEvent(new Event("input", { bubbles: true }));

    const cards = document.querySelectorAll(".event-card");

    expect(cards[0].hidden).toBe(false);
    expect(cards[1].hidden).toBe(true);
    expect(cards[2].hidden).toBe(true);
});

test("register button updates its text", () => {
    const button = document.querySelector(".register-button");

    button.click();

    expect(button.textContent).toBe("Interest Registered!");
});
