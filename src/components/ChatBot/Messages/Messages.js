import React, { useEffect, useRef } from "react";
import "./Messages.css";
import Message from "./Message/Message";

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
