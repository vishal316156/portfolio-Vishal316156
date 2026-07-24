const Stats = require("../models/Stats");
const fetchCodeforces = require("../services/fetchCodeforces");
const fetchLeetcode = require("../services/fetchLeetcode");

const REFRESH_INTERVAL =
  Number(process.env.STATS_REFRESH_HOURS || 24) * 60 * 60 * 1000;
let isRefreshing = false;

async function refreshStats() {
  try {
  const stats = await Stats.findOne();
    const [cf, lc] = await Promise.all([
      fetchCodeforces(),
      fetchLeetcode(),
    ]);

    stats.codeforces = {
      ...stats.codeforces,
      ...cf,
    };
    stats.leetcode = {
      ...stats.leetcode,
      ...lc,
    };
    stats.lastUpdated = new Date();
    await stats.save();

    console.log("Stats refreshed successfully");
  } catch (err) {
    console.error("Background refresh failed:", err.message);
  } finally {
    isRefreshing = false;
  }
}

const getStats = async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats();

      const [cf, lc] = await Promise.all([fetchCodeforces(), fetchLeetcode(), ]);

      stats.codeforces = {
        ...stats.codeforces,
        ...cf,
      };

      stats.leetcode = {
        ...stats.leetcode,
        ...lc,
      };
      stats.lastUpdated = new Date();
      await stats.save();
    } else {
      const shouldRefresh =
        !stats.lastUpdated || Date.now() - new Date(stats.lastUpdated).getTime() > REFRESH_INTERVAL;

      if (shouldRefresh && !isRefreshing) {
        isRefreshing = true;
        refreshStats();
      }
    }

    const response = stats.toObject();
    response.refreshing = isRefreshing;

    delete response._id;
    delete response.__v;

    res.json(response);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getStats,
};