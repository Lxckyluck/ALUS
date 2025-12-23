document.addEventListener("DOMContentLoaded", () => {
  CheckToken();
  fetch("http://localhost:3000/flags/first_flag")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#first_flag").innerHTML += `
      <p>OhOhOh ! Alors comme ça tu as réussi à rentrer ? Et bah bienvenue. Voici ton cadeau pour avoir réussi à être venu ici : ${data.flag}</p>`;
    });
});
function CheckToken() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
  }
}
