import classnames from "classnames";
import MessageAvatar from "./MessageAvatar/MessageAvatar";
import MessageBubble from "./MessageBubble/MessageBubble";
import "./Message.css";

const Message = ({ message }) => {
  const isBot = message.isBot;
  const bubbleAvatarOrder = isBot
    ? [
        <MessageAvatar {...{ isBot }} key={0} />,
        <MessageBubble {...{ isBot }} key={1}>
          {message.messageText}
        </MessageBubble>,
      ]
    : [
        <MessageBubble {...{ isBot }} key={0}>
          {message.messageText}
        </MessageBubble>,
        <MessageAvatar {...{ isBot }} key={1} />,
      ];

  const className = classnames("message", { "user-message": !isBot });
  return <div {...{ className }}>{bubbleAvatarOrder}</div>;
};

export default Message;
