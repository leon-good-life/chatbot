import React, { useState } from "react";
import { evaluate } from "mathjs";
import { v4 as uuidv4 } from "uuid";
import "./MessageForm.css";
import submitIcon from "./submit_icon.png";

const generateBotResponses = ({ fullName, messageInputValue }) => {
  if (!fullName) {
    return [
      {
        messageText: `Nice to meet you ${messageInputValue}.`,
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
  try {
    const result = evaluate(messageInputValue);
    return [
      {
        messageText: result,
        isBot: true,
        id: uuidv4(),
      },
      {
        messageText: "This was easy, give me somthing harder 🤓",
        isBot: true,
        id: uuidv4(),
      },
    ];
  } catch (err) {
    return [
      {
        messageText: "Sorry. I did'nt understand.",
        isBot: true,
        id: uuidv4(),
      },
    ];
  }
};

const MessageForm = ({ messages, setMessages, fullName, setFullName }) => {
  const [messageInputValue, setMessageInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const responses = generateBotResponses({ fullName, messageInputValue });

    setMessages([
      ...messages,
      {
        messageText: messageInputValue,
        isBot: false,
        id: uuidv4(),
      },
      ...responses,
    ]);

    if (!fullName) {
      localStorage.setItem("fullName", messageInputValue);
      setFullName(messageInputValue);
    }
    setMessageInputValue("");
  };
  return (
    <form className="message-form" onSubmit={onSubmit}>
      <input
        className="message-input"
        value={messageInputValue}
        onChange={(e) => setMessageInputValue(e.target.value)}
      />
      <button type="submit" className="submit-button">
        <img src={submitIcon} alt="Submit" className="submit-button-img" />
      </button>
    </form>
  );
};

export default MessageForm;
