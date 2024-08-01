import '../../index.css'
import Button from './Button';

function Contacto() {
    return ( 
        <section className="container contacto">
            <h2 className="contacto__title">Contactanos</h2>
            <form action="#" className="form">
                <label className="form__label" htmlFor="email">
                    Correo electrónico
                    <input className="form__input" type="email" name="email" id="email" placeholder="Coloque su correo electrónico" />
                </label>
                <label className="form__label" htmlFor="textarea">
                    comentario
                    <textarea className="form__input form__textarea" name="comentario" id="textarea" placeholder="coloque su comentario"></textarea>
                </label>
                <Button clase='form__btn' desc='Enviar'/>
            </form>
        </section>
    );
}

export default Contacto;