import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup';
import Error from './components/Error/Error'
import User from './components/UserHome/User';
import Header from './components/header/Header';
import ComposeEmail from './components/composeEmail/ComposeEmail';
import Inbox from './components/inbox/Inbox';
import Emails from './components/inbox/Emails';
import Sent from './components/inbox/Sent';
import ShowEmail from './components/inbox/ShowEmail';

const router = createBrowserRouter([{
  path : '/',
  element : <Header/>,
  errorElement : <Error />,
  children : [
    {path : 'userhome' , element : <User/>},
    {path : 'signup' , element : <Signup/>},
    {path : 'inbox' , element : <Inbox/>, children :
      [{path : 'inbox/emails' , element : <Emails/>},
      {path : 'inbox/composeemail' , element : <ComposeEmail/>},
      {path : 'inbox/sent', element : <Sent/>},
      {path : 'inbox/emails/:id' , element : <ShowEmail/>}]},
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
