import {
  fetchUser,
  fetchEvents,
  fetchRepos,
  fetchStarredRepo,
} from "./fetchData.js";

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const user = document.querySelector("input").value;
  console.log(user);
  fetchUser(user);
  fetchEvents(user);
  fetchRepos(user);
  fetchStarredRepo(user);
});
