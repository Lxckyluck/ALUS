document.addEventListener("DOMContentLoaded", () => {
  CheckToken();
  document.querySelector("#first_flag").innerHTML += `
      <p>OhOhOh ! Alors comme ça tu as réussi à rentrer ? Et bah bienvenue.</p>`;
});
function CheckToken() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
  }
}
