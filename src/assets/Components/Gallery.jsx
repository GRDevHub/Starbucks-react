import Figure from "./Figure";
import '../../index.css'
import img1 from '../Images/img-1.png'
import img2 from '../Images/img-2.png'
import img3 from '../Images/img-3.png'

function Gallery() {
    return ( 
        <section id="cafe" className="container gallery">
            <Figure classF='gallery__picture' classImg='gallery__img' logo={img1}/>
            <Figure classF='gallery__picture' classImg='gallery__img' logo={img2}/>
            <Figure classF='gallery__picture' classImg='gallery__img' logo={img3}/>
        </section>
    );
}

export default Gallery;