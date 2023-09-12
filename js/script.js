import {
  fetchUser,
  fetchEvents,
  fetchRepos,
  fetchStarredRepo,
} from "./fetchData.js";
import { iterateObject } from "./displayData.js";
import { loadingEffect, toggleVisibility } from "./loadingEffect.js";

const resultDiv = document.querySelector(".result");
const loadingDiv = document.querySelector(".loadingDiv");
const searchDiv = document.querySelector(".search");

console.log(loadingDiv);

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  toggleVisibility(searchDiv);
  loadingEffect(loadingDiv);
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
