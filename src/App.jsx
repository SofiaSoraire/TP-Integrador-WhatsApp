import { ChatProvider } from './context/ChatContext';
import { AppRouter } from './router/AppRouter';
import './styles/global.css';

function App() {
  return (
    <ChatProvider>
      <AppRouter />
    </ChatProvider>
  );
}

export default App;