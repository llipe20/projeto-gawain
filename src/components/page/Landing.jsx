import React from "react";

const LandingPage = () => {
    return (
        <div class="flex flex-col justify-between items-center gap-5 w-screen min-h-screen bg-gray-200" >
            <section class="flex flex-col justify-start items-center gap-5 w-full h-96">
                <div class="flex justify-center items-center w-full h-28 bg-blue-950">
                    <div class="flex justify-center items-center w-48 h-36 bg-blue-800">
                        <img src="" alt="" />
                    </div>
                </div>
                <div class="flex flex-col justify-between items-center p-5 w-full h-60 bg-red-200">
                    <h1 class="text-2xl font-bold text-white">Biblioteca Digital</h1>
                    <div>
                        {/* Input de pesquisar livros aqui */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage