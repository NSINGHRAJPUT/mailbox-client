import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup';
import Error from './components/Error/Error'
import User from './components/UserHome/User';
import Header from './components/header/Header';
import ComposeEmail from './components/composeEmail/ComposeEmail';

const router = createBrowserRouter([{
  path : '/',
  element : <Header/>,
  errorElement : <Error />,
  children : [
    {path : 'userhome' , element : <User/>},
    {path : 'signup' , element : <Signup/>},
    {path : 'composeemail' , element : <ComposeEmail/>}

  ]
}])
function App() {
  return (
    <div>
    <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
