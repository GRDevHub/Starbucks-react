import '../../index.css'
import Figure from './Figure';
import logo from '../Images/logo.png'

function Presentacion() {
    return ( 
        <section id='cafe' className='container presentation'>
            <div className="presentation__texts">
                <h1 className="presentation__title">No solo es Cafe es <span>Starbucks</span></h1>
                <p className="presentation__paragraph">Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas: compartir el mejor café con nuestros amigos y contribuir a que el mundo sea un poco mejor. Así era cuando abrió la primera tienda Starbucks en 1971, y así continúa siendo hoy.</p>
            </div>
            <Figure classF='presentation__logo' classImg='presentation__img' logo={logo} />
        </section>
    );
}

export default Presentacion;