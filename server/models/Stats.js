const mongoose = require("mongoose");
const historySchema = new mongoose.Schema(
  {
    contestName: String,
    rating: Number,
    date: Date,
  },
  { _id: false }
);
const statsSchema = new mongoose.Schema(
  {
    leetcode: {
      easy: {
        type: Number,
        default: 0,
      },
      medium: {
        type: Number,
        default: 0,
      },
      hard: {
        type: Number,
        default: 0,
      },
      maxRating: {
        type: Number,
        default: 0,
      },
    },

    codeforces: {
    currentRating: Number,
    maxRating: Number,
    rank: String,
    history: [historySchema],
    },

    gfg: {
      basic: {
        type: Number,
        default: 0,
      },
      easy: {
        type: Number,
        default: 0,
      },
      medium: {
        type: Number,
        default: 0,
      },
      hard: {
        type: Number,
        default: 0,
      },
    },

    portfolio: {
      problemsSolved: {
        type: Number,
        default: 0,
      },
      technologies: {
        type: Number,
        default: 0,
      },
      majorProjects: {
        type: Number,
        default: 0,
      },
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Stats", statsSchema);