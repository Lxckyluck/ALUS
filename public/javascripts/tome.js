document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/tome/tome_content")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#content").innerHTML += `
      <p>${data}</p>`;
    });
});
