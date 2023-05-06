import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { authActions } from "../store/authentication";
import './Header.css';

const Header = () =>{
    const isLogged = useSelector(state=>state.auth.isLogged);
    const token = useSelector(state=>state.auth.token)
    const dispatch = useDispatch();
    const nav = useNavigate();

    const logoutHandler = (e) =>{
        e.preventDefault();
        dispatch(authActions.logout())
        nav('/')
    }
    return <div className="header">
        <h2>Mail Box Client</h2>
        {!token &&<Link to='/signup'><button className = 'btn btn-primary log'>Sign In here</button></Link>}
        {token &&<Link to='/signup'><button className = 'btn btn-primary log' onClick={logoutHandler}>Log Out</button></Link>}
        <section><Outlet/></section>
    </div>
}

export default Header;