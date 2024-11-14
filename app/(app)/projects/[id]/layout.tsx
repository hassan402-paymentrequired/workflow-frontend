'use client'
import {useState, useEffect, use} from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SingleProjectSidebar } from "@/components/SingleProjectSidebar"
import {axios} from '@/lib/axios'

export default function Layout({ children, params }: { children: React.ReactNode, params: {id:string|number} }) {
    const { id } = use(params); 
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(`/api/v1/project/${id}`)
        .then((res) => setData(res.data.project))
        .catch((error) => console.log(error));
    }, [id]); 

    console.log(data);

  return (
    <SidebarProvider>
      <SingleProjectSidebar project={data}/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
