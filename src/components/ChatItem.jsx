import { Link, useParams } from 'react-router-dom';
import './ChatItem.css';

export const ChatItem = ({ chat }) => {
  const { chatId } = useParams();
  const isActive = parseInt(chatId) === chat.id;

  return (
    <Link to={`/chat/${chat.id}`} className={`chat-item ${isActive ? 'active' : ''}`}>
      <div className="chat-avatar">{chat.avatar}</div>
      <div className="chat-info">
        <div className="chat-header">
          <span className="chat-name">{chat.name}</span>
          <span className="chat-time">{chat.time}</span>
        </div>
        <div className="chat-preview">
          <span className="last-message">{chat.lastMessage}</span>
          {chat.unread > 0 && (
            <span className="unread-badge">{chat.unread}</span>
          )}
        </div>
      </div>
    </Link>
  );
};