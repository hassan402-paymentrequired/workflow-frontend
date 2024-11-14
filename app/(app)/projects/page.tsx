'use client'
import React, { useEffect, useState } from 'react'
import ProjectTable from '@/components/ProjectTable'
import {FilterIcon} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { axios } from '@/lib/axios'

const Project = () => {
  const [data, setDate] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/projects').then(res => setDate(res.data)).catch(error => console.log(error))
    setLoading(false)
  }, [])
  
if(loading) return <div>Loading.......</div>

console.log(data);

  return (
    <div className='p-5'>
      <div className="flex w-full py-4 items-center justify-between">
        <h1 className='text-xl sm:text-3xl font-bold'>Projects</h1>
        <div className='flex items-center gap-5'>
        <Input
          placeholder="Filter names..."
          className="max-w-sm"
        />
        <div className="flex p-1 rounded items-center gap-1 bg-gray-300">
          <FilterIcon size={15}/>
          <span className='text-sm'>filter</span>
        </div>
        </div>
      </div>

      <ProjectTable data={data} />
    </div>
  )
}

export default Project