import React from 'react'

import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'

import starwarV from '../assets/videos/star-wars.mp4'
import disneyV from '../assets/videos/disney.mp4'
import nationalGeographicV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import marvelV from '../assets/videos/marvel.mp4'


function ProductionHouse() {
    const productionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: nationalG,
            video: nationalGeographicV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwar,
            video: starwarV
        }
    ]
    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:p-16'>
            {productionHouseList.map((item) => (
                <div className='border-2 border-[#1c1e2b]  hover:scale-110 duration-500 ease-in-out transition-all rounded-lg cursor-pointer shadow-xl shadow-black'>
                    <video src={item.video} autoPlay loop playsInline muted className='absolute rounded-md opacity-0 hover:opacity-50 z-0 top-0' />
                    <img src={item.image} className='z-[1] w-full' />
                </div>
            )

            )}
        </div>
    )
}

export default ProductionHouse