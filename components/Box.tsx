import { RefAttributes } from "react"
import {type LucideIcon} from 'lucide-react'

const Box = ({value, text, icon, color}: {value:string , text:string, icon?: LucideIcon, color?: string}) => {
  return (
    <div className="flex flex-col space-y-1 border-r px-3">
        <span className="text-sm">{text}</span>
        <div className={`flex items-center px-3 py-1 gap-1  rounded-2xl ${color}`}>
        <span>{icon}</span>
        <span className={`text-xs text-gray-800`}>{value}</span>
        </div>
    </div>
  )
}

export default Box