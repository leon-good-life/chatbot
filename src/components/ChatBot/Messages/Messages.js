import React, { useEffect, useRef } from "react";
import "./Messages.css";
import Message from "./Message/Message";

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const combinedMessages = messages.map((message, index) => {
    const isCombined = index > 0 && messages[index - 1].isBot === message.isBot;
    return { ...message, isCombined };
  });
  return (
    <div className="messages">
      {combinedMessages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
