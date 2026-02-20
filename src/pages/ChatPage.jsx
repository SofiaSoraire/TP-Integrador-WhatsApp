import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';
import { MessageBubble } from '../components/MessageBubble';
import './ChatPage.css';

export const ChatPage = () => {
  const { chatId } = useParams();
  const { chats, messages, sendMessage } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState('');

  const chat = chats.find(c => c.id === parseInt(chatId));
  const chatMessages = messages[chatId] || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(chatId, newMessage);
    setNewMessage('');
  };

  if (!chat) {
    return <div className="chat-page">Chat no encontrado</div>;
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <div className="chat-header-info">
          <span className="chat-avatar">{chat.avatar}</span>
          <h2>{chat.name}</h2>
        </div>
      </div>

      <div className="messages-container">
        {chatMessages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="message-input"
        />
        <button type="submit" className="send-button" disabled={!newMessage.trim()}>
          Enviar
        </button>
      </form>
    </div>
  );
};