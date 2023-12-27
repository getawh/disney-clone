import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className='color-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer hover:underline underline-offset-8 transition-300 m-1'>
            <Icon />
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderItem