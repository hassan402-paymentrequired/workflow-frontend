import  { createContext} from 'react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {  format } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const UserContext = createContext<unknown>([]);


export const formatDateToSqlDialet = (date) => {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}
