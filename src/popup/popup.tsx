import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const Conversations = () => {
  const [conversations, setConversations] = React.useState([]);

  React.useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    };
    const fetchData = async () => {
      const response = await fetch(
        `https://chat.openai.com/backend-api/conversation`,
        { headers }
      );
      const newData = await response.json();
      setConversations(newData);
    };
    fetchData();
  }, []);

  console.log(conversations);
};

const test = (
  <div className="p-4">
    <Conversations />
    <h1 className="text-center text-2xl mb-4">Search keywords</h1>
    <div className="max-w-md mx-auto">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);

root.render(test);
