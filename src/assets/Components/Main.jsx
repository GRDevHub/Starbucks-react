import Presentacion from "./Presentacion";
import '../../index.css'
import Gallery from "./Gallery";
import Contacto from "./Contacto";

function Main() {
    return ( 
        <main className="main">
            <Presentacion />
            <Gallery />
            <Contacto />
        </main>
    );
}

export default Main;