import { useState } from 'react';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';
import Root from './routes/root';
import ErrorPage from './routes/error';
import Palindrome from './routes/Palindrome';
import Sort from './routes/Sort';
import Stack from './routes/Stack';

function App() {
  
const router = createBrowserRouter([

  { path: '/', element:<Root/>, 
  errorElement: <ErrorPage/>, children: [
    { path: '/', element: <Home/> },
    { path: '/palindrome', element: <Palindrome/>,},
    { path: '/sort', element: <Sort/> },
    { path: '/stack', element: <Stack/> }
  ]}
]);

  return (
    <div>   
      <RouterProvider router = {router} />
      </div>
  );
};
 
export default App;