import React from 'react'

type Props = {
    color: string,
    innerColor: string
}

const Dot = ({color, innerColor}: Props) => {
  return (
    <div className={`w-4 h-4 flex items-center justify-center rounded-full ${color}`}>
    <div className={`w-2 h-2  rounded-full ${innerColor}`}></div>
    </div>
  )
}

export default Dot