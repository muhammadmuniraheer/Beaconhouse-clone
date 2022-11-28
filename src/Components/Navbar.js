import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-0 bg-white rounded">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="./bnu.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><img src="./about-us.png" alt="" /> ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/group-profile"><img src="./group-profile.png" alt="" /> GROUP PROFILE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/education"><img src="./academics.png" alt="" /> EDUCATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events"><img src="./events-icons.png" alt="" /> EVENTS</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="alumni.png" alt="" /> ALUMNI</a>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    );

}
export default Navbar;