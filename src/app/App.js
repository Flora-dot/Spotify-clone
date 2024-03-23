import './App.css';
// import { useNavigation } from 'react-router-dom';
import Landing  from '../pages/Landing';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// const route = createBrowserRouter([
//   {
//     path: '',
//     element: <Landing />,
//   },
//   {
//     path: '/Login',
//     element: <Login />
//   },
//   {
//     path: '*',
//     element: <NotFound />
//   }
// ]);
// function App() {
//   return (
//     <RouterProvider router={route}></RouterProvider>
//   );
// }

function App() {
  return(
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/login" element={<Login />} /> {/* Use element prop instead of Component */}
        <Route path="*" element={<NotFound />} /> {/* Add a route for 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
