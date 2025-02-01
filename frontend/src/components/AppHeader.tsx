import {Link} from 'react-router-dom';
import logo from '../../../old_files/VT Field Hockey Logo.png' // Whenever we set up an assets folder, change this

function AppHeader() {
    return (
        <header className="container">
            <div className="nav-hamburger-dropdown">
                Menu
            </div>
            <div className="fockey-logo-and-title">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Virginia Tech Field Hockey Logo"
                        width="100px"
                        height="auto"
                    />
                </Link>
                <h1 className="text-logo">VT Field Hockey</h1>
            </div>
            <div className="account-info-button">
                Account
            </div>
        </header>
    )
}
export default AppHeader;