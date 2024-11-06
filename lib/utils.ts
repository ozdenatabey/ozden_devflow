import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTexhName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTexhName]
    ? `${techMap[normalizedTexhName]} colored`
    : "devicon-devicon-plain";
};
