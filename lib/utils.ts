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

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hours ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} days ago`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} months ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} years ago`;
  }
};
