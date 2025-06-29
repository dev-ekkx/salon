import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const emailAndPhoneValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{2,15}$/;
    
    if (emailRegex.test(value)) {
        return {
            key: "email",
            data: value
        }
    } else if (phoneRegex.test(value)) {
        return {
            key: "phone",
            data: value.toString()
        }
    } else {
        return {
            key: "error",
            data: "Invalid email or phone number format"
        };
    }

}

