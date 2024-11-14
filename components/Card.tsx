import React from 'react'
import Dot from './Dot'

type Props = {
    title: string,
    count: number
    color:string,
    innercolor: string
}

const Card = ({title, count, color, innercolor}: Props) => {
  return (
    <div className="aspect-video rounded-xl bg-stone-100/50 dark:bg-stone-800/50" >
    <div className="w-full flex items-center space-x-1 px-5 py-3">
          <Dot innerColor={innercolor} color={color} />
          <span>{title}</span>
    </div>

<div className="flex w-full px-4 mt-3">
    <h3 className='text-xl sm:text-2xl md:text-4xl font-bold'>{count}</h3>
</div>
    
    
</div>
  )
}

export default Card