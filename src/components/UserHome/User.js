import { Link } from "react-router-dom";

const User = () =>{ 
    
    return <header>
        Welcome to Your Mail Box
        <br/>
        <Link to='/inbox'> go to Inbox</Link>
        <hr></hr>
    </header>

}

export default User;