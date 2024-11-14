import { Input } from "./ui/input"
import { Label } from "./ui/label"

type props ={
    title: string,
    type: string,
    className?: string,
    placeholder: string
}

const FormInput = ({title ,className,placeholder, type = 'text', ...prop }: props) => {
  return (
    <div className="grid w-full items-center gap-1.5 ">
    <Label htmlFor="email">{title}</Label>
    <Input type={type} id="name" placeholder={placeholder} className={`w-full ${className}`} {...prop} />
  </div>
  )
}

export default FormInput