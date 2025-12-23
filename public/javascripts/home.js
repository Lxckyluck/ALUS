document.addEventListener("DOMContentLoaded", () => {
  CheckToken();
  fetch("https://alus-42702a.pages.gitlab.tech.orange/flags/first_flag")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#first_flag").innerHTML += `
      <p>Bravo ! Voici le premier flag : ${data.flag}</p>`;
      sessionStorage.setItem("first_flag", data.flag);
    });
});
function CheckToken() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
  }
}
