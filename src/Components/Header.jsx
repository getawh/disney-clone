import React from 'react'
import { useState } from 'react'
import logo from './../assets/Images/disney.png'
import avatar from './../assets/Images/profile-avatar.jpg'
import HeaderItem from './HeaderItem'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import {
    HiPlus,
    HiDotsVertical
} from 'react-icons/hi'

function Header() {
    const [Toggle, SetToggle] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-8 '>
                <img src={logo} className='w-[80px] md:[115px] object-cover' />
                <div className='hidden items-center gap-8  md:flex'>
                    {menu.map((items) => (
                        <HeaderItem name={items.name} Icon={items.icon} />
                    ))}
                </div>
                <div className='flex items-center gap-8 md:hidden'>
                    {menu.map((items, index) => index < 3 && (
                        <HeaderItem name={""} Icon={items.icon} />
                    ))}
                    <div >
                        <div onClick={() => SetToggle(!Toggle)} onBlur={() => SetToggle(false)}>
                            <HeaderItem name={""} Icon={HiDotsVertical} />
                        </div>

                        {Toggle ? <div className='flex flex-col absolute p-5 border border-[#242424] rounded-md mt-5 bg-[#01071c]'>
                            {menu.map((items, index) => index > 2 && (
                                <HeaderItem name={items.name} Icon={items.icon} />
                            ))}
                        </div> : null

                        }

                    </div>
                </div>
            </div>
            <img src={avatar} className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header