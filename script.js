import { config } from "./config.js";
import { Octokit } from "https://esm.sh/octokit";

const personalToken = config.personalToken;

// Pass personal token to Octokit instance
const octokit = new Octokit({
  auth: personalToken,
});

try {
  const response = await octokit.request("GET /users/benante", {
    username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const userdata = response.data;
  console.log(userdata);
} catch (error) {
  console.error("Error: ", error.message);
}
