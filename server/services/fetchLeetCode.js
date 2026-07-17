const axios = require("axios");

const USERNAME = "vishal_kumar_ee_nitjsr";

async function fetchLeetcode() {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
        }
      }

      userContestRanking(username: $username) {
        rating
      }
    }
  `;

  const variables = {
    username: USERNAME,
  };

  const { data } = await axios.post(
    "https://leetcode.com/graphql",
    {
      query,
      variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const stats =
    data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

  return {
    easy: stats.find((x) => x.difficulty === "Easy").count,
    medium: stats.find((x) => x.difficulty === "Medium").count,
    hard: stats.find((x) => x.difficulty === "Hard").count,
    solved: stats.find((x) => x.difficulty === "All").count,

    maxRating: Math.round(
      data.data.userContestRanking?.rating || 0
    ),
  };
}

module.exports = fetchLeetcode;