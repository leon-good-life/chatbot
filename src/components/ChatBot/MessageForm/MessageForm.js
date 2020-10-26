import React, { useState } from "react";
import { evaluate } from "mathjs";
import { v4 as uuidv4 } from "uuid";
import "./MessageForm.css";
import submitIcon from "./submit_icon.png";

const MessageForm = ({ messages, setMessages }) => {
  const [messageInputValue, setMessageInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    let botResponseMessage = "";
    try {
      botResponseMessage = evaluate(messageInputValue);
    } catch (err) {
      botResponseMessage = "Sorry. I did'nt understand.";
    }
    setMessages([
      ...messages,
      {
        messageText: messageInputValue,
        isBot: false,
        id: uuidv4(),
      },
      {
        messageText: botResponseMessage,
        isBot: true,
        id: uuidv4(),
      },
    ]);
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
