
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='w-10/12 mx-auto  bg-red-50'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
