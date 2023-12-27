import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
const windowSize = window.innerWidth

function Slider() {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()
    useEffect(() => {
        getTrandingVideos();
    }, []);

    const getTrandingVideos = () => {
        GlobalApi.getTrandingVideos.then(resp => {
            setMovieList(resp.data.results)
        })
    }
    const sliderRight = (element) => {
        element.scrollLeft += windowSize - 125
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= windowSize - 125
    }
    return (
        <div>
            <HiChevronLeft className='hidden md:block mx-8 mt-[150px] text-[30px] absolute cursor-pointer ' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block mx-8 mt-[150px] text-[30px] absolute cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex w-full px-16 overflow-x-auto scrollbar-hide scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={imageBaseUrl + item.backdrop_path} alt="hey" className='min-w-full  mr-5 md:h-[310px] object-cover object-left-mid rounded-lg  hover:border-4 border-gray-100 cursor-pointer transition-all ease duration-300 ' />
                ))
                }
            </div>
        </div>
    )
}

export default Slider