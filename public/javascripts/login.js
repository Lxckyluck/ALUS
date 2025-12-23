document.addEventListener("DOMContentLoaded", () => {
  CheckToken();

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      getCredentials();
    });
  }
});

function getCredentials() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (user === data.user && password === data.password) {
        sessionStorage.setItem("token", data.token);
        window.location.href = "../home.html";
      } else {
        alert("Mauvais utilisateur ou mauvais mot de passe");
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la requête :", err);
    });
}

function CheckToken() {
  const token = sessionStorage.getItem("token");
  if (token) {
    window.location.href = "../home.html";
  }
}
