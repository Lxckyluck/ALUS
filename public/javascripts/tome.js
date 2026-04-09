document.addEventListener("DOMContentLoaded", () => {
  fetch(`${BASE_URL}/tome/tome_content`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#content").innerHTML += `
      <p>${data}</p>`;
    });
});
