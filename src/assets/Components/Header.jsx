import Nav from './Nav'
import '../../index.css'
import Main from './Main';

const Header = () => {
    return (
        <header className="header">
            <Nav />
            <Main />
        </header>
    );
}

export default Header;