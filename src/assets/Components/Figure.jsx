import '../../index.css'

function Figure({classF, classImg, logo}) {
    return ( 
        <figure className={classF}>
            <img className={classImg} src={logo} />
        </figure>
    );
}

export default Figure;