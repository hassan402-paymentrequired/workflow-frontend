import React from 'react'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <div className='w-full flex flex-col'>
        <div className="w-full flex items-center justify-between">
            <h4 className='text-base font-semibold text-gray-700'>Lot</h4>
            <span className='text-base font-semibold text-gray-700'>43%</span>
        </div>

        <div className="w-full bg-gray-200 h-4 rounded-2xl mt-2">
            <div className="w-1/2 bg-green-500 h-full rounded-2xl"></div>
        </div>
        
    </div>
  )
}

export default ProjectCard