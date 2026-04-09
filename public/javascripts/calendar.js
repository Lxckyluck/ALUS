const days = document.querySelectorAll(".calendar .day");
let calendar_days = [];

days.forEach((day) => {
  day.addEventListener("click", () => {
    const dayNumber = parseInt(day.getAttribute("data-day"));
    calendar_days.push(dayNumber);
    if (calendar_days.length === 3) {
      fetch(
        `${BASE_URL}/flags/!not_second_flag/${calendar_days[0]}/${calendar_days[1]}/${calendar_days[2]}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const p = document.createElement("p");
          p.id = "second_flag";
          p.innerHTML = `${data}    `;
          document.body.appendChild(p);
        });
      calendar_days = [];
    }
  });
});
