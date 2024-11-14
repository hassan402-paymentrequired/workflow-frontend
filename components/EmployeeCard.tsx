import React from "react";
import { motion } from "framer-motion";
import {Badge } from "@/components/ui/badge"
import {Linkedin, Twitter, Instagram  } from "lucide-react"
import Link from "next/link";

type User = {
  user: {
    name: string;
    email: string;
    role: string;
  };
};

const EmployeeCard = ({ user }: User) => {
  return (
    <motion.div className="shadow p-3 rounded-md">
      <div className="flex w-full  gap-1">
        <div className="w-10 h-10 flex items-center uppercase shadow-md justify-center rounded-full border">{user?.name.substring(0, 2)}</div>
        <div className="flex flex-col">
          <h2 className="text-lg">{user?.name}</h2>
          <span className="text-xs">{user?.email}</span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-2 mt-5">
        <div className="flex items-center space-x-2">
            <Link href='#' className="hover:animate-bounce">
            <Instagram size={18}/>
            </Link>
            <Link href='#' className="hover:animate-bounce">
            <Linkedin size={18} />
            </Link>
            <Link href='#' className="hover:animate-bounce">
            <Twitter size={18}/>
            </Link>
        </div>
        <Badge>{user?.role.name}</Badge>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
