import React from 'react'
import MovieCard from '../components/MovieCard'

const Movies = ({movies}) => {
    return (
        <div>
            <h1 className='text-center'>MOVIES LIST</h1>
            <div className='container'>
                {
                    movies.map(({id,name, videoLink,photo,description,year})=>{
                        return (
                            <MovieCard key={id} id={id} video={videoLink} photo={photo} name={name} description={description} year={year}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Movies
