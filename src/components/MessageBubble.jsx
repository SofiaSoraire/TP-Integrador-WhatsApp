import './MessageBubble.css';

export const MessageBubble = ({ message }) => {
  return (
    <div className={`message-bubble ${message.fromMe ? 'mine' : 'theirs'}`}>
      <div className="message-text">{message.text}</div>
      <div className="message-time">{message.time}</div>
    </div>
  );
};