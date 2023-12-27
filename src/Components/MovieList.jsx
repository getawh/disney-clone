import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

function MovieList({ genreId }) {
    const [genreMovieList, setGenreMovieList] = useState([])
    // setGenreMovieList(GlobalApi.getMovieByGenreId(item.id))

    useEffect(() => (
        getMovieByGenreId()
    ), [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results)
            setGenreMovieList(resp.data.results)
        }

        )
    }
    return (
        <div className='flex w-full overflow-x-auto scrollbar-hide'>

{        genreMovieList.map((item) => (

            <img src={imageBaseUrl + item.backdrop_path} className='w-[110px] md:w-[200px] object-cover m-5 rounded-md hover:border-2 hover:scale-110 border-gray-200 transition-all duration-500 ease-in-out' />


            ))}
        </div>
            )
}

export default MovieList