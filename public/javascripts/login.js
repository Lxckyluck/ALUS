document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    getCredentials();
  });

function getCredentials() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const token = sessionStorage.getItem("token");
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
      if (token) {
        window.location.href = "../home.html";
      }
    })
    .catch((err) => {
      console.error("Erreur lors de la requête :", err);
    });
}
