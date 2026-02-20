import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ChatPage } from '../pages/ChatPage';

const router = createBrowserRouter([
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