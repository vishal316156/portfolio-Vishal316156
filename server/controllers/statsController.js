const Stats = require("../models/Stats");
const fetchCodeforces = require("../services/fetchCodeforces");
const fetchLeetcode = require("../services/fetchLeetcode");

const getStats = async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats();
    }
    const REFRESH_INTERVAL = Number(process.env.STATS_REFRESH_HOURS || 24) * 60 * 60 * 1000;
    const shouldRefresh =
      !stats.lastUpdated ||
      Date.now() - new Date(stats.lastUpdated).getTime() > REFRESH_INTERVAL ;

    if (shouldRefresh) {
  const cf = await fetchCodeforces();
  const lc = await fetchLeetcode();

  stats.codeforces = cf;
  stats.leetcode = lc;
  stats.lastUpdated = new Date();
    await stats.save();
  }
    const response = stats.toObject();

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