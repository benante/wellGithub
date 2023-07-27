import { Octokit } from "https://esm.sh/octokit";
import { config } from "./config.js";

// NEED TO BE ADD INTO .ENV
const personalToken = config.personalToken;
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
  const userPicUrl = res.avatar_url;
  const userInfo = {
    name: res.name,
    bio: res.bio,
    company: res.company,
    followers: res.followers,
    location: res.location,
    page: res.html_url,
  };
  console.log(userInfo);
}

async function fetchEvents(username) {
  fetchData(`GET /users/${username}/events/public`, "EVENTS");
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
