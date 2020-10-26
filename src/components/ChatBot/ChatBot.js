import React from "react";
import { v4 as uuidv4 } from "uuid";
import Messages from "./Messages/Messages";
import MessageForm from "./MessageForm/MessageForm";
import "./ChatBot.css";

const initialMessages = [
  {
    messageText: "Hi, I'm Maya! Today you're going to help me to ace my game.",
    isBot: true,
    id: uuidv4(),
  },
];

const App = () => {
  const [messages, setMessages] = React.useState(initialMessages);
  return (
    <div className="chat-bot">
      <div className="messages-container">
        <Messages messages={messages} />
      </div>
      <MessageForm {...{ messages, setMessages }} />
    </div>
  );
};

export default App;
