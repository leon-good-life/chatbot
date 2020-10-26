import React from "react";
import { v4 as uuidv4 } from "uuid";
import Messages from "./components/Messages/Messages";
import MessageForm from "./components/MessageForm/MessageForm";
import "./App.css";

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
    <div className="app">
      <div className="messages-container">
        <Messages messages={messages} />
      </div>
      <MessageForm {...{ messages, setMessages }} />
    </div>
  );
};

export default App;
