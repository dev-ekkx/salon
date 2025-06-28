import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const emailAndPhoneValidator = (value: string | number) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (emailRegex.test(value.toString())) {
        return "email";
    } else if (phoneRegex.test(value.toString())) {
        return "phone";
    } else {
        return null;
    }
}

