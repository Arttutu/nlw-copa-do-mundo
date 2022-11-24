function creatGame(player1, player2, hour, gol1, gol2) {
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
      </li>
      <ul>
        <li>
          <span> ${gol1} </span>
          <span> x </span>
          <span> ${gol2} </span>
        </li>
      </ul>
  `
}
let delay = -0.3
function creatCard(date, day, games) {
  delay = delay + 0.3
  return `
     <div class="card" style = "animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
    </div> 
  `
}

document.querySelector("#cards").innerHTML =
  //Concatena o texo
  creatCard("24/11", "quinta", creatGame("brazil", "serbia", "16:00", 2, 0)) +
  creatCard(
    "28/11",
    "segunda",
    creatGame("brazil", "switzerland", "13:00", 2, 1)
  ) +
  creatCard("02/12", "sexta", creatGame("brazil", "cameroon", "16:00", 4, 0))
