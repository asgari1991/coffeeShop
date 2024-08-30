import React from 'react'

export default function CategoryItem({img,title}) {
  return (
    <div className='w-25 md:w-50 text-center'>
      <a href="#">
        <img src={img} alt="" loading='lazy'/>
      </a>
      <span className='inline-block font-DanaDemiBold text-sm md:text-lg text-zinc-700 dark:text-white mt-1.5 md:mt-2.5'>{title}</span>
    </div>
  )
}
