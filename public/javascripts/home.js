document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/flags/first_flag")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#first_flag").innerHTML += `
      <p>Bravo ! Voici le premier flag : ${data.flag}</p>`;
      sessionStorage.setItem("first_flag", data.flag);
    });
});

function LogOff() {
  sessionStorage.removeItem("token");
  console.log("retrait token");

  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "../index.html";
  }
}
