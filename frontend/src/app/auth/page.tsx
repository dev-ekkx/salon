'use client'

import React, {useEffect} from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FcGoogle} from "react-icons/fc";
import {emailAndPhoneValidator} from "@/lib/utils";

const Page = () => {

    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd,cca3");
        const res = await response.json();

        return res.map((country: unknown) => ({
            name: country.name.common,
            flag: country.flags.svg,
            calling_code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
            country_code_iso3: country.cca3
        }));
    }

    useEffect(() => {
        console.log(fetchCountries());
    }, [])

    console.log(emailAndPhoneValidator("4343242sad@fd.cj"))
    return (
        <div>
            <section className="hidden md:flex md:justify-center md:items-center h-dvh">
                <span className={"text-5xl"}>Switch to mobile to enjoy!!!</span>
            </section>
            <section
                className={"bg-auth h-dvh bg-cover bg-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/40 md:hidden"}>
                <section
                    className={"p-4 sm:pl-10 sm:pr-32 transition-all duration-200 ease-initial flex absolute z-10 bottom-0 left-0 flex-col gap-4 h-6/12 w-full 2-20"}>
                    <p className={"text-white font-bold text-3xl sm:text-4xl leading-10 h-auto"}>
                        Book your perfect <br/> Look in minutes!
                    </p>
                    <div className="flex flex-col gap-4">
                        <Input type={"text"} placeholder={"Enter your email or phone number"}
                               className={"bg-white h-11"}/>
                        <Button className={"h-11 cursor-pointer"}>Continue</Button>
                    </div>
                    <span className={"font-bold text-2xl mx-auto text-white"}>OR</span>
                    <Button
                        className={"h-11 cursor-pointer overflow-x-clip flex gap-4 items-center font-semibold active:bg-primary"}
                        variant={"outline"}>
                        <FcGoogle/>
                        <span>
                        Continue with Google
                        </span>
                    </Button>
                </section>
            </section>
        </div>
    )
}
export default Page
