import { Link, Outlet } from "react-router-dom";

const Header = () =>{
    return <div className="header">
        <h2>Mail Box Client</h2>
        <Link to='/signup'>Sign In here</Link>
        <section><Outlet/></section>
    </div>
}

export default Header;