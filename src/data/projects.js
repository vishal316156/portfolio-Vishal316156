import plagsHome from "../assets/plagschecker-home.png";
import plagsResult from "../assets/plagschecker-result.png";

import dashboard from "../assets/chatbot-dashboard.png";
import home from "../assets/chatbot-home.png";
import chat from "../assets/chatbot-chat.png";

export const projects = [
  {
    id: "plagschecker",
    eyebrow: "SOURCE CODE ANALYSIS",
    title: "C++ Plagiarism Checker",
    description:
      "Source-code similarity detection system for C++ programs using tokenization, code normalization, n-gram similarity and winnowing-based fingerprinting to identify structural similarities across different code transformations.",
    screenshots: [
      {
        src: plagsHome,
        alt: "C++ plagiarism checker interface",
      },
      {
        src: plagsResult,
        alt: "C++ source code similarity analysis result",
      },
    ],
    featuresDescription:
      "Evaluated against multiple source-code transformations including variable renaming, formatting changes, dead-code insertion, statement reordering and loop transformations.",
    features: [
      "C++ Tokenization",
      "Code Normalization",
      "Identifier Normalization",
      "N-Gram Similarity",
      "Winnowing",
      "Fingerprinting",
      "Similarity Scoring",
      "Dataset Evaluation",
    ],

    liveUrl: "YOUR_PLAGSCHECKER_LIVE_URL",
    githubUrl: "YOUR_PLAGSCHECKER_GITHUB_URL",
  },

  {
    id: "ai-chatbot",

    eyebrow: "AI APPLICATION",
    title: "AI Chatbot",
    description:
      "Full-stack AI platform powered by Gemini AI with authentication, persistent conversations, dashboard analytics, responsive design and modern user experience.",
    screenshots: [
      {
        src: dashboard,
        alt: "AI Chatbot analytics dashboard",
      },
      {
        src: home,
        alt: "AI Chatbot home interface",
      },
      {
        src: chat,
        alt: "AI Chatbot conversation interface",
      },
    ],
    featuresDescription:
      "Designed as a production-style AI platform featuring secure authentication, persistent chat history, analytics dashboard, theme switching and responsive UI.",
    features: [
      "Gemini AI",
      "JWT Auth",
      "Chat History",
      "Responsive UI",
      "Dashboard",
      "MongoDB",
      "Theme Support",
      "Modern UX",
    ],

    liveUrl: "https://ai-chatbot-lilac-seven.vercel.app/",
    githubUrl: "https://github.com/vishal316156/AiChatbot",
  },
];