const axios = require("axios");

const USERNAME = "Vishal_MarcoX_83";

async function fetchCodeforces() {
    const [userRes, historyRes] = await Promise.all([
        axios.get(
            `https://codeforces.com/api/user.info?handles=${USERNAME}`
        ),
        axios.get(
            `https://codeforces.com/api/user.rating?handle=${USERNAME}`
        ),
    ]);

    const user = userRes.data.result[0];

    const history = historyRes.data.result.map((contest) => ({
        contestName: contest.contestName,
        rating: contest.newRating,
        date: new Date(contest.ratingUpdateTimeSeconds * 1000),
    }));

    return {
        currentRating: user.rating,
        maxRating: user.maxRating,
        rank: user.rank,
        history,
    };
}

module.exports = fetchCodeforces;