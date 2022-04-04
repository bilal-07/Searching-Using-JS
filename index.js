const userCards = document.querySelector("[data-user-template]");
const userscardsContainer = document.querySelector(
  "[data-user-cards-container]"
);
const dataSearch = document.querySelector("[data-search]");

let users = [];

dataSearch.addEventListener("input", (e) => {
  const value = e.target.value;
  users.forEach((user) => {
    if (user.name.toLowerCase().includes(value.toLowerCase())) {
      user.element.style.display = "block";
    } else {
      user.element.style.display = "none";
    }
    // const visible = user.name.includes(value) || user.email.includes(value);
    // user.element.classList.toggle("hide", !visible);
    // user.element.style.display = visible ? "block" : "none";
  });
  console.log(users);
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCards.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userscardsContainer.append(card);
      return { name: user.name, email: user.email, element: card };
      //   console.log(user);
    });
  });
