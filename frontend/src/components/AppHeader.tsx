import {Link} from 'react-router-dom';
import logo from '../../../old_files/VT Field Hockey Logo.png' // Whenever we set up an assets folder, change this

function AppHeader() {
    return (
        <header className="container">
            <div className="fockey-logo-and-title">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Virginia Tech Club Sports Logo"
                        className="fh-logo"
                    />
                </Link>
                <h1 className="text-logo">Virginia Tech Field Hockey</h1>
            </div>
            <div className="account-info-button">
                <button>
                    Admin Login
                </button>
            </div>
        </header>
    )
}
export default AppHeader;