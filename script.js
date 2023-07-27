import { config } from "./config.js";
import { Octokit } from "https://esm.sh/octokit";

const personalToken = config.personalToken;

// Pass personal token to Octokit instance
const octokit = new Octokit({
  auth: personalToken,
});

let tempUser = "benante";

// GET USER
try {
  const response = await octokit.request(`GET /users/${tempUser}/starred`, {
    username: "USERNAME",
    headers: {
      "content-type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
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
  const response = await octokit.request(`GET /users/${tempUser}/starred`, {
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
  const response = await octokit.request(
    `GET /users/${tempUser}/events/public`,
    {
      username: "USERNAME",
      headers: {
        "content-type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  console.group("EVENTS");
  const userdata = response.data;
  console.log(userdata);
} catch (error) {
  console.error("Error: ", error.message);
}
console.groupEnd();

// LIST REPO
try {
  const response = await octokit.request(`GET /users/${tempUser}/repos`, {
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
