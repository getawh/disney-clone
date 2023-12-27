import React, { useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import GenresList from '../Constants/GenresList'
import imageBaseUrl from './Slider'

function GenreMovieList() {
    // const [genreMovieList, setGenreMovieList] = useState([])
    // setGenreMovieList(GlobalApi.getMovieByGenreId(item.id))

    // getMovieByGenreId = (id) => {
    //     GlobalApi.getMovieByGenreId(id).then(resp => {
    //         setGenreMovieList(resp.data.results)
    //     }

    //         )
    // }
    return (
        <div>
            {GenresList.genre.map((item,index) => index<=4 && (
                
                <div>
                    <h2 className='font-bold text-16 p-8 px-8 md:px-16'>
                    {item.name}
                    </h2>
                    <MovieList/>
                </div>
            )

            )}
        </div>
    )
}

export default GenreMovieList