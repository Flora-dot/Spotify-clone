import './App.css';
import Landing  from './pages/Landing';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const route = createBrowserRouter([
  {
    path: '',
    element: <Landing />,
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
function App() {
  return (
    <>
    <ToastContainer />
    <RouterProvider router={route}></RouterProvider>
    </>
  );
}

// function App() {
//   return(
//     <>
//     <ToastContainer />
//     <Router>
//       <Routes>
//         <Route path="" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

export default App;
