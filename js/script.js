import { config } from "./config.js";
import { Octokit } from "https://esm.sh/octokit";

const personalToken = config.personalToken;
const headers = {
  headers: {
    "content-type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

// Pass personal token to Octokit instance
const octokit = new Octokit({
  auth: personalToken,
});

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const user = document.querySelector("input").value;
  console.log(user);
  // GET USER
  try {
    const response = await octokit.request(`GET /users/${user}`, {
      username: "USERNAME",
      headers,
    });
    console.group("USER");
    const userdata = response.data;
    console.log(userdata);
  } catch (error) {
    console.error("Error: ", error.message);
  }
  console.groupEnd();

  // STARRED REPO
  try {
    const response = await octokit.request(`GET /users/${user}/starred`, {
      username: "USERNAME",
      headers: {
        "content-type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.group("STARRED REPO");
    const userdata = response.data;
    console.log(userdata);
  } catch (error) {
    console.error("Error: ", error.message);
  }
  console.groupEnd();

  // GET EVENTS PUBLIC
  try {
    const response = await octokit.request(`GET /users/${user}/events/public`, {
      username: "USERNAME",
      headers: {
        "content-type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.group("EVENTS");
    const userdata = response.data;
    console.log(userdata);
  } catch (error) {
    console.error("Error: ", error.message);
  }
  console.groupEnd();

  // LIST REPO
  try {
    const response = await octokit.request(`GET /users/${user}/repos`, {
      username: "USERNAME",
      headers: {
        "content-type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.group("REPO");
    const userdata = response.data;
    console.log(userdata);
  } catch (error) {
    console.error("Error: ", error.message);
  }
  console.groupEnd();
});
