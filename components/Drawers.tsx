"use client"

import * as React from "react"
import { } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useRouter } from "next/router"
import Link from "next/link"


export function DrawerDemo({click, projectId} : {click: boolean, projectId: string}) {
  const [goal, setGoal] = React.useState(350)
  const buttonClick = React.useRef(null);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  React.useEffect(() => {
    if (click && buttonClick.current) {
        buttonClick.current.click();  
    }
}, [click]);



  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="hidden" ref={buttonClick}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Project Created!</DrawerTitle>
            <DrawerDescription>Your project is ready. You can add team anytime.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur motion-preset-float ">
                <h2 className="text-[7rem] ">🥳</h2>
            </div>
          </div>
          <DrawerFooter>
            <Link href={`/add-team/${projectId}`}>Add team</Link>
            <DrawerClose asChild>
            <Link href={`/dashboard`}>Continue</Link>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
