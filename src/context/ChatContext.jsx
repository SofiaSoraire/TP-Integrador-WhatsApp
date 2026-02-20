import { createContext, useState } from 'react';

// Datos de ejemplo
const initialChats = [
  { id: 1, name: 'Juan Pérez', lastMessage: 'Hola, ¿cómo estás?', time: '10:30', avatar: '👤', unread: 2 },
  { id: 2, name: 'María García', lastMessage: 'Nos vemos mañana', time: '09:15', avatar: '👩', unread: 0 },
  { id: 3, name: 'Grupo de Estudio', lastMessage: 'La reunión es a las 8', time: 'Ayer', avatar: '👥', unread: 5 },
];

const initialMessages = {
  1: [
    { id: 1, text: 'Hola Juan, ¿todo bien?', fromMe: true, time: '10:00' },
    { id: 2, text: 'Hola! Sí, todo bien. ¿Y vos?', fromMe: false, time: '10:15' },
    { id: 3, text: 'Bien también. ¿Nos juntamos?', fromMe: true, time: '10:20' },
    { id: 4, text: 'Hola, ¿cómo estás?', fromMe: false, time: '10:30' },
  ],
  2: [
    { id: 1, text: 'María, ¿confirmado para mañana?', fromMe: true, time: '09:00' },
    { id: 2, text: 'Sí, confirmado. A las 10', fromMe: false, time: '09:05' },
    { id: 3, text: 'Nos vemos mañana', fromMe: false, time: '09:15' },
  ],
  3: [
    { id: 1, text: '¿Qué tema vemos hoy?', fromMe: false, time: 'Ayer' },
    { id: 2, text: 'React, creo', fromMe: true, time: 'Ayer' },
    { id: 3, text: 'La reunión es a las 8', fromMe: false, time: 'Ayer' },
  ],
};

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  // Función para enviar un mensaje
  const sendMessage = (chatId, text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: text,
      fromMe: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Actualizar mensajes del chat
    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage]
    }));

    // Actualizar último mensaje en la lista de chats
    setChats(prev => prev.map(chat => 
      chat.id === parseInt(chatId) 
        ? { ...chat, lastMessage: text, time: 'Ahora', unread: 0 }
        : chat
    ));
  };

  // Función para crear nuevo chat (opcional)
  const createNewChat = (name) => {
    const newChat = {
      id: chats.length + 1,
      name,
      lastMessage: 'Nuevo chat creado',
      time: 'Ahora',
      avatar: '👤',
      unread: 0
    };
    setChats(prev => [...prev, newChat]);
    setMessages(prev => ({ ...prev, [newChat.id]: [] }));
  };

  return (
    <ChatContext.Provider value={{ chats, messages, sendMessage, createNewChat }}>
      {children}
    </ChatContext.Provider>
  );
};