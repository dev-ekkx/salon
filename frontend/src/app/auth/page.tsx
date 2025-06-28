import React from 'react'

const Page = () => {
    return (
        <div>
            <section className="hidden md:flex md:justify-center md:items-center h-dvh">
                <span className={"text-5xl"}>Switch to mobile to enjoy!!!</span>
            </section>
            <section
                className={"bg-auth h-dvh bg-cover bg-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/40"}>
                <section
                    className={"border-2 p-4 flex absolute z-10 bottom-0 left-0 flex-col gap-4 h-6/12 w-full 2-20"}>
                    <p className={"text-white font-bold text-3xl sm:text-4xl leading-10 h-auto"}>Book
                        your
                        perfect <br/> Look in
                        minutes!
                    </p>
                    <div className="flex flex-col gap-4">
                        
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Page
