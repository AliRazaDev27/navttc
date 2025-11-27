import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImage(url:string){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  if(!url) return "";
  if(url.startsWith("http")) return url;
  return `${baseUrl}/${url}`;
}