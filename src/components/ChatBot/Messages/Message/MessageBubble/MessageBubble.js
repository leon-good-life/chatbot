import classnames from "classnames";
import "./MessageBubble.css";

const MessageBubble = ({ children, isBot }) => {
  const className = classnames(
    "message-bubble",
    { bot: isBot },
    { user: !isBot }
  );
  return <div className={className}>{children}</div>;
};

export default MessageBubble;
