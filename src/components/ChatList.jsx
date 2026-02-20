import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { ChatItem } from './ChatItem';
import './ChatList.css';

export const ChatList = () => {
  const { chats } = useContext(ChatContext);

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};