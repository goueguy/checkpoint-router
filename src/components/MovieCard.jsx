import React from 'react'
import {Link} from 'react-router-dom'
const MovieCard = ({id,name,year,photo}) => {
    return (
        <div className='mx-auto row'>
            <Link to={`/movie/${id}`}>
                <div className='col-lg-6 offset-3 card mt-5 mb-2 p-2 flex-row shadow'>
                    <img src={photo} alt={name} className='mr-4' height={"190px"} width={"150px"}/>
                    <div className='flex-col m-5'>
                        <h2>
                        {name}
                        </h2>
                        <div>
                        Sortie en : {year}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default MovieCard;
