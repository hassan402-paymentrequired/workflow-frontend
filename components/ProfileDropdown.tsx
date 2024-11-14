import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import {ChevronsDownIcon} from 'lucide-react'


export function ProfileDropdown({user}) {
  console.log(user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
       <div className="flex items-center gap-3 border p-1 rounded cursor-pointer">
        <Image width={20} src="/assets/images/hero.png"  height={20} alt="profile" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col">
            <h2 className="text-xs">{user?.name || 'guest'}</h2>
            <span className="text-xs">{user?.email || 'guest'}</span>
        </div>
        <ChevronsDownIcon/>
       </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
      </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
