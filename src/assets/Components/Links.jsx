function Links({ links }) {
    return ( 
        <ul className="nav__lists">
            {
                links.map( item => {
                    return <li href={`#${item.toLowerCase()}`} key={item} className="nav__link">{ item }</li>
                })
            }
        </ul>
    );
}

export default Links;