import classnames from "classnames";
import MessageAvatar from "./MessageAvatar/MessageAvatar";
import MessageBubble from "./MessageBubble/MessageBubble";
import "./Message.css";

const Message = ({ message }) => {
  const { isBot, isCombined } = message;

  const avatar = message.isCombined ? null : (
    <MessageAvatar {...{ isBot }} key={0} />
  );

  const bubble = (
    <MessageBubble {...{ isBot }} key={1}>
      {message.messageText}
    </MessageBubble>
  );

  const bubbleAvatarOrder = isBot ? [avatar, bubble] : [bubble, avatar];

  const className = classnames(
    "message",
    { "user-message": !isBot },
    { "combined-message": isCombined }
  );

  return <div {...{ className }}>{bubbleAvatarOrder}</div>;
};

export default Message;
