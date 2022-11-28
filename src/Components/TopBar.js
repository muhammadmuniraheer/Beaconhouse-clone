import {Link} from 'react-router-dom';
function topbar() {
    return (
        <div className="topbar">
            <nav className="navbar navbar-expand-lg topbar-nav ">
                <div className="container">
                    <a className="nav-link me-2" href="#">03054361146</a>
                    <a className="nav-link " href="#">info@hildes.com</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">EXPLORE EARLY YEARS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CAREERS</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact-us">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default topbar;