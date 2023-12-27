import React, { useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import GenresList from '../Constants/GenresList'
import imageBaseUrl from './Slider'
import MovieList from './MovieList'

function GenreMovieList() {
    return (
        <div>
            {GenresList.genre.map((item, index) => index <= 4 && (

                <div className='p-8 px-8 md:px-16' >
                    <h2 className='font-bold text-16 '>
                        {item.name}
                    </h2>
                    <MovieList genreId={item.id} />
                </div>
            )

            )}
        </div>
    )
}

export default GenreMovieList