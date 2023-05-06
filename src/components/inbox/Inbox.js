import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Inbox = () =>{
    const [sent,setSent] = useState(null)
    return <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="inbox/composeemail" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <button className="fs-5 d-none d-lg-inline btn btn-primary">Compose</button>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="inbox/emails" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Inbox</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Unread</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Starred</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Drafts</span> </a>
                            </li>
                            <li>
                                <Link to="inbox/sent" className="nav-link px-0"> <span className="d-none d-sm-inline">Sent</span></Link>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Deleted</span></a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Spam</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
        <div className="col py-3">
            <Outlet></Outlet>
        </div>
    </div>
</div>
}

export default Inbox;