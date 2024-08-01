import Figure from "./Figure";
import '../../index.css'
import Links from "./Links";
import logo from '../Images/logo.png'

function Nav() {
    const links = ['Inicio', 'Cafe', 'Sobre Nosotros', 'Delivery'];
    return ( 
        <nav className='container nav'>
            <Figure classF='nav__logo' classImg='nav__img' logo={logo} />
            <section className="nav__menu">
                <Links links={ links }/>
            </section>
            <label htmlFor="menu" className="nav__label">
                <input type="checkbox" id="menu" />
            </label>
            <div className="perfil">               
                <i className="bi bi-person-circle"></i>
            </div>
        </nav>
    );
}

export default Nav;