import './App.css';
// import { useNavigation } from 'react-router-dom';
import Landing  from '../pages/Landing';
import { Login } from './pages/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
  },
  {
    path: '/Login',
    element: <Login />
  }
]);
function App() {
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
