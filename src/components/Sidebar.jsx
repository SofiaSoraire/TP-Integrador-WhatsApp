import { Link } from 'react-router-dom';
import { ChatList } from './ChatList';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <button className="new-chat-btn">➕</button>
      </div>
      <ChatList />
    </aside>
  );
};