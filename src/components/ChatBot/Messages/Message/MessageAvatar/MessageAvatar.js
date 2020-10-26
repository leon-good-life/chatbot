import matyasAvatar from "./mayas_avatar.png";
import userAvatar from "./user_avatar.png";
import "./MessageAvatar.css";

const MessageAvatar = ({ isBot }) => {
  const src = isBot ? matyasAvatar : userAvatar;
  const alt = isBot ? "Maya (bot)" : "User";
  return (
    <div>
      <img className="avatar-image" {...{ src, alt }} />
    </div>
  );
};

export default MessageAvatar;
