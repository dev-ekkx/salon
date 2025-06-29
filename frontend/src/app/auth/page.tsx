"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { cn, emailAndPhoneValidator } from "@/lib/utils";
import parsePhoneNumber, { CountryCode, E164Number } from "libphonenumber-js";
import { useUserCountry } from "@/hooks/useCountries";

const Page = () => {
  // const {data: countries} = useCountries();
  const { data: userCountryInfo } = useUserCountry();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailOrNumber, setEmailOrNumber] = useState<string | number>("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValue, setFormValue] = useState<E164Number | string>("");

  const handleBlur = () => {
    const inputValue = emailOrNumber.toString().trim();
    if (!inputValue.length) return;

    console.log(userCountryInfo);
    const validationCheck = emailAndPhoneValidator(inputValue);
    const data = validationCheck.data;
    if (validationCheck.key === "phone") {
      const phoneNumber = parsePhoneNumber(
        data,
        (userCountryInfo?.country ?? "US") as CountryCode
      )?.number;
      if (phoneNumber) {
        setFormValue(phoneNumber);
        setIsFormValid(true);
        setErrorMessage("");
      }
    } else if (validationCheck.key === "email") {
      setFormValue(data);
      setIsFormValid(true);
      setErrorMessage("");
    } else {
      console.log(data);
      setErrorMessage(validationCheck.data);
      setIsFormValid(false);
    }
  };

  return (
    <div>
      <section className="hidden h-dvh md:flex md:items-center md:justify-center">
        <span className={"text-5xl"}>Switch to mobile to enjoy!!!</span>
      </section>
      <section
        className={
          "bg-auth relative h-dvh bg-cover bg-center after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/40 md:hidden"
        }
      >
        <section
          className={
            "2-20 absolute bottom-0 left-0 z-10 flex h-6/12 w-full flex-col gap-4 p-4 transition-all duration-200 ease-initial sm:pr-32 sm:pl-10"
          }
        >
          <p
            className={
              "h-auto text-3xl leading-10 font-bold text-white sm:text-4xl"
            }
          >
            Book your perfect <br /> Look in minutes!
          </p>
          <div className="flex flex-col gap-4">
            <Input
              type={"text"}
              placeholder={"Enter your email or phone number"}
              value={emailOrNumber}
              onBlur={handleBlur}
              onChange={e => setEmailOrNumber(e.target.value)}
              className={cn("h-11 bg-white", {
                "border-red-500 text-red-500 outline-red-500":
                  errorMessage.length > 0,
              })}
            />
            {errorMessage.length > 0 && (
              <p className={"-mt-4 text-sm text-red-500"}>{errorMessage}</p>
            )}
            <Button disabled={!isFormValid} className={"h-11 cursor-pointer"}>
              Continue
            </Button>
          </div>
          <span className={"mx-auto text-2xl font-bold text-white"}>OR</span>
          <Button
            className={
              "active:bg-primary flex h-11 cursor-pointer items-center gap-4 overflow-x-clip font-semibold"
            }
            variant={"outline"}
          >
            <FcGoogle />
            <span>Continue with Google</span>
          </Button>
        </section>
      </section>
    </div>
  );
};
export default Page;
