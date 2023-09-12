import {
  fetchUser,
  fetchEvents,
  fetchRepos,
  fetchStarredRepo,
} from "./fetchData.js";
import { iterateObject } from "./displayData.js";

const resultDiv = document.querySelector(".result");
console.log(resultDiv);

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const user = document.querySelector("input").value;
  try {
    let userInfo = await fetchUser(user);
    console.log("USERINFO:   " + userInfo);
    iterateObject(userInfo, resultDiv);
    fetchEvents(user);
    fetchRepos(user);
    fetchStarredRepo(user);
  } catch (error) {
    console.error("Error fetching user information: ", error);
  }
});
