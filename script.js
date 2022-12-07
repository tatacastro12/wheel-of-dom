let players = [];

// LÓGICA

// Añadir envento a todos los botones para eliminar jugadores

const deleteButtonHandler = (e) => {
  let idToDelete = e.target.id;
  players = players.filter((player) => player.id != idToDelete);
  guardarEnStorage(players);
  render();
};

// Añadir jugador, creando un nuevo objeto y enviándolo mediante .push al array de players

let btnAddPlayer = document.getElementById("addPlayer");

let soundAddPlayer = new Audio("")

btnAddPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  let inputPlayer = document.getElementById("inputPlayer");

  let idNewPlayer = players.length;

  let nameNewPlayer = inputPlayer.value;
  if (inputPlayer.value == "") {
    alert("please enter a valid name");
  } else {
    players.push({
      id: idNewPlayer,
      playerName: nameNewPlayer,
      isDead: false,
    });
  }
  inputPlayer.value = "";
  soundAddPlayer.play()
  render();
  guardarEnStorage(players);
});

// doom
const render = () => {
  let htmlPlayers = ``;


  let listPlayers = document.getElementById("listOfPlayers");

  players.forEach(
    (player) =>
    (htmlPlayers += `<li class="item_list_player" >
          <p class="player_name">${player.playerName}</p>
          <i class="bi bi-trash-fill player_delete"id="${player.id}"></i>
          </li>`)
  );
  listPlayers.innerHTML = htmlPlayers;
  addDeleteButton();
};

const addDeleteButton = (e) => {
  let deletePlayer = document.querySelectorAll(".player_delete");

  deletePlayer.forEach((deleteButton) =>
    deleteButton.addEventListener("click", deleteButtonHandler)
  );
};

render();


function guardarEnStorage(object) {
  let playersLocal = object;

  localStorage.setItem("playersKey", JSON.stringify(playersLocal));
}