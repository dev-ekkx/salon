import React from 'react'
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Luk Fresh Salon - Onboarding",
    description: "Onboarding page for Luk Fresh Salon application",
};

const Page = () => {
    return (
        <div className="h-dvh relative">
            <div
                className="w-full h-full relative after:absolute after:w-full after:h-full after:bg-black/40 bg-onboarding-sm md:bg-onboarding-lg bg-no-repeat bg-cover bg-center">
            </div>
            {/*<div className="flex flex-col gap-4 z-20 absolute bottom-0 p-10 pb-20">*/}
            {/*    <span className="text-2xl text-white font-semibold">Welcome to</span>*/}
            {/*    <span className="text-5xl font-bold text-lf-primary">Luk Fresh</span>*/}
            {/*    <p className={"text-lf-light"}>The best barber & salon app for your good looks and beauty.</p>*/}
            {/*</div>*/}
        </div>
    )
}
export default Page
