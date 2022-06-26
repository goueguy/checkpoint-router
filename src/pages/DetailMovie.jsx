import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const DetailMovie = ({movies}) => {
    const id = useParams().id;
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    }
    const movieData = movies.find(movie=>movie.id==id ? movie:"");

    return (
        <div className='mx-auto row mb-5'>
            <iframe width="722" height="500" src={movieData.videoLink} title="The Day I Met El Chapo | Official Trailer [HD] | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='col-lg-8 offset-2 card mt-5 mb-5 p-2 flex-row shadow'>
                <img src={movieData.photo} alt={movieData.name} className='align-middle mr-4 mt-5' height={"190px"} width={"200px"}/>
                <div className='flex-col m-5'>
                    <h2>
                    {movieData.name}
                    </h2>
                    <p className='text-justify'>
                        {movieData.description}
                    </p>
                    <p>
                    Sortie en : <span className='text-dark font-weight-bold'>{movieData.year}</span>
                    </p>
                    <a href="#" onClick={()=>goBack()}>BACK</a>
                </div>
            </div>
        </div>
    )
}

export default DetailMovie
