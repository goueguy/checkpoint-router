import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to={"/"}><li>ACCUEIL</li></Link>
                    <Link to={"/movies"}><li>MOVIES</li></Link>
                </ul>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
