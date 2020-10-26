import "./Messages.css";
import Message from "./Message/Message";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
