import '../../index.css'
import logo from '../Images/logo.png'

function Figure({classF, classImg}) {
    return ( 
        <figure className={classF}>
            <img className={classImg} src={logo} />
        </figure>
    );
}

export default Figure;