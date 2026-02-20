import { createHashRouter, RouterProvider } from 'react-router-dom'; // Cambia a createHashRouter
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ChatPage } from '../pages/ChatPage';

// Cambia createBrowserRouter por createHashRouter
const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'chat/:chatId',
        element: <ChatPage />
      }
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};