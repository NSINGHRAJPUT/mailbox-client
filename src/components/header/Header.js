import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { authActions } from "../store/authentication";

const Header = () =>{
    const isLogged = useSelector(state=>state.auth.isLogged);
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch();

    const logoutHandler = (e) =>{
        e.preventDefault();
        dispatch(authActions.logout())
    }
    return <div className="header">
        <h2>Mail Box Client</h2>
        {!token &&<Link to='/signup'><button className = 'btn btn-primary'>Sign In here</button></Link>}
        {token &&<Link to='/signup'><button className = 'btn btn-primary' onClick={logoutHandler}>Log Out</button></Link>}
        <section><Outlet/></section>
    </div>
}

export default Header;