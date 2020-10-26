import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Messages from "./Messages/Messages";
import MessageForm from "./MessageForm/MessageForm";
import "./ChatBot.css";

const nameFromLocalStorage = localStorage.getItem("fullName") || "";

const generateInitialMessages = () => {
  if (nameFromLocalStorage) {
    return [
      {
        messageText: `Hi ${nameFromLocalStorage}, I'm Maya! Today you're going to help me to ace my game.`,
        isBot: true,
        id: uuidv4(),
      },
      {
        messageText:
          "Alright, this how it's going to work. List any mathematical expression you can think of - I'll crunch it in no time",
        isBot: true,
        id: uuidv4(),
      },
    ];
  }
  return [
    {
      messageText:
        "Hi, I'm Maya! Today you're going to help me to ace my game.",
      isBot: true,
      id: uuidv4(),
    },
    {
      messageText: "Let's start by telling your name",
      isBot: true,
      id: uuidv4(),
    },
  ];
};

const App = () => {
  const [messages, setMessages] = useState(generateInitialMessages());
  const [fullName, setFullName] = useState(nameFromLocalStorage);
  return (
    <div className="chat-bot">
      <div className="messages-container">
        <Messages messages={messages} />
      </div>
      <MessageForm {...{ messages, setMessages, fullName, setFullName }} />
    </div>
  );
};

export default App;
