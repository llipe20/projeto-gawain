import React from "react";
import Card from "./Card";

const Volume = ({estante, name}) => {
    return (
        <div className="flex flex-col gap-3 w-full lg:w-10/12 pl-4">
            {/* Componente de livros por serie */}
            <div className="flex justify-start items-center w-full">
                <h2 className="w-full text-lg lg:text-2xl font-bold border-b-4 border-yellow-900 text-black text-start">
                    {name}
                </h2>
            </div>
            <section className="flex justify-center items-center w-full min-h-96  mt-2 mb-2">
                <section className="grid grid-cols-2 lg:grid-cols-5 grid-rows-2 w-full gap-3 min-h-96 rounded-lg bg-white lg:shadow lg:p-3">
                    <Card />
                </section>
            </section>
        </div>
    )
}

export default Volume