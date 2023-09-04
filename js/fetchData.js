import { Octokit } from "https://esm.sh/octokit";
// import { personalToken } from "./config.js";
import { dotenv } from "dotenv";
dotenv.config({ path: "./.env" });

// Access the token using process.env.PERSONAL_TOKEN
const personalToken = process.env.PERSONAL_TOKEN;
// NEED TO BE ADD INTO .ENV

// Pass personal token to Octokit instance
const octokit = new Octokit({
  auth: personalToken,
});

// Function to fetch data based on different endpoints
async function fetchData(endpoint, group) {
  try {
    const response = await octokit.request(endpoint, {
      headers: {
        "content-type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.group(group);
    console.log(response.data);
    console.groupEnd();
    return response.data;
  } catch (error) {
    console.error("Error: ", error.message);
    throw error;
  }
}

async function fetchUser(username) {
  const res = await fetchData(`GET /users/${username}`, "USER");
  const userInfo = {
    userPicUrl: res.avatar_url,
    name: res.name,
    company: res.company,
    followers: res.followers,
    location: res.location,
    page: res.html_url,
  };
  console.log(userInfo);
}

async function fetchEvents(username) {
  const res = await fetchData(`GET /users/${username}/events/public`, "EVENTS");
  console.log(typeof res);
}

async function fetchRepos(username) {
  //  get only 6 repos ordered by last update
  const queryParameter = `?sort=updated&order=desc`;
  const res = await fetchData(
    `GET /users/${username}/repos${queryParameter}`,
    "REPOS",
  );
  const reducedArray = res.slice(0, 6);
  console.log(reducedArray);
  return reducedArray;
}

async function fetchStarredRepo(username) {
  return fetchData(`GET /users/${username}/starred`, "STARRED REPOS");
}

export { fetchData, fetchUser, fetchEvents, fetchRepos, fetchStarredRepo };
