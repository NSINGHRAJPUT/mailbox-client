import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup';
import Error from './components/Error/Error'
import User from './components/UserHome/User';
import Header from './components/header/Header';

const router = createBrowserRouter([{
  path : '/',
  element : <Header/>,
  errorElement : <Error />,
  children : [
    {path : 'userhome' , element : <User/>},
    {path : 'signup' , element : <Signup/>}
  ]
}])
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
