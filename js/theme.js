document.addEventListener("DOMContentLoaded", () => {
  const house = localStorage.getItem("hogwartsHouse");
  const body = document.body;
  const greeting = document.getElementById("greeting");
  const crest = document.getElementById("houseCrest");

  const houseThemes = {
    gryffindor: {
      primary: "var(--gryffindor-primary)",
      accent: "var(--gryffindor-accent)",
      crest: "images/gryffindor.jpg",
      name: "Gryffindor"
    },
    slytherin: {
      primary: "var(--slytherin-primary)",
      accent: "var(--slytherin-accent)",
      crest: "images/slytherin.jpg",
      name: "Slytherin"
    },
    ravenclaw: {
      primary: "var(--ravenclaw-primary)",
      accent: "var(--ravenclaw-accent)",
      crest: "images/ravenclaw.jpg",
      name: "Ravenclaw"
    },
    hufflepuff: {
      primary: "var(--hufflepuff-primary)",
      accent: "var(--hufflepuff-accent)",
      crest: "images/hufflepuff.png",
      name: "Hufflepuff"
    }
  };

  if (!house || !houseThemes[house]) return;

  const theme = houseThemes[house];

  // Background gradient
  body.style.background = `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`;

  // Greeting + crest
  greeting.textContent = `Welcome, proud member of ${theme.name}!`;
  crest.src = theme.crest;

  // Update cards + buttons
  document.querySelectorAll(".card").forEach(card => {
    card.style.border = `3px solid ${theme.accent}`;
    card.style.background = `${theme.primary}CC`; // add opacity
  });

  document.querySelectorAll(".btn").forEach(btn => {
    btn.style.background = theme.accent;
    btn.style.color = theme.primary;
    btn.style.border = `1px solid ${theme.primary}`;
  });
});