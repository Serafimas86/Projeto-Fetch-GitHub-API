import { getRepositories } from "./repositories.js";
import { getEvents } from "./events.js";

import { getUser } from "./user/user.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

const btnSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;

    if (validateEmptyteInput(userName)) return;
    getUserData(userName);
  });

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    getUserData(userName);
  }
});

function validateEmptyteInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o Nome do Usuario");
    return true;
  }
}

async function getUserData(userName) {
  const userResponse = await getUser(userName);
  const repositoriesResponse = await getRepositories(userName);
  const eventsResponse = await getEvents(userName);

  if (validateEmptyteInput(userName)) return;

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  user.setInfo(userResponse);

  user.setRepositories(repositoriesResponse);
  user.setEvents(eventsResponse);

  screen.renderUser(user);
}
