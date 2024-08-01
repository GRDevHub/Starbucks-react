function Button({desc, clase}) {
    return ( 
        <button className={clase}>{ desc }</button>
    );
}

export default Button;