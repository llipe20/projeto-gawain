import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import '../App.css';

const LandingPage = () => {
    return (
        <div class="flex flex-col justify-between items-center gap-5 w-screen min-h-screen bg-gray-200" >
            <section class="flex flex-col justify-start items-center w-full h-80 lg:h-96 backdrop relative">
                <div class="w-full h-20 bg-yellow-950 opacity-80"></div>
                {/* Caixa da logo*/}
                <div class="flex justify-center items-center w-auto h-20 lg:h-24 lg:h-32 bg-yellow-900 pr-4 lg:pr-6 p-2 lg:p-4 absolute top-0 left-4 lg:left-36 z-10">
                    <img className="w-16 lg:w-24" src="https://i.ibb.co/yFCP6gW/Logo-gawain.png" alt="logo-gawain" />
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-sm lg:text-lg font-bold text-white">projeto</span>
                        <span className="text-base lg:text-2xl font-bold text-white">GAWAIN</span>
                    </div>
                </div>
                {/* Caixa do usuario */}
                <div className="flex justify-end items-center w-1/2 h-16 lg:h-16 gap-3 text-white absolute top-0 lg:top-2 right-4 lg:right-36">
                    <span className="text-sm lg:text-lg">Nome do usuário</span>
                    <div className="w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-white z-0 cursor-pointer">{/* IMAGEM DO USUARIO AQUI */}</div>
                </div>

                <div class="flex flex-col justify-between items-center w-full h-72 relative">
                    <div className="w-full h-16 lg:h-20 bg-yellow-950 opacity-50"></div>
                    <h1 class="text-2xl lg:text-4xl font-bold text-white absolute top-8 left-4 lg:left-36 z-100">Biblioteca Digital Universitaria</h1>
                    {/* Campo de pesquisa*/}
                    <div className="flex w-full h-20 lg:h-16 justify-center items-start p-4 lg:p-0">
                        <div className="flex justify-between items-center w-full md:w-1/2 h-10 lg:h-12 text-black lg:text-lg bg-white pl-4 pr-4 rounded-lg overlow-hidden text-white">
                             <HiOutlineSearch className="cursor-pointer" />
                            <input type="text" className="w-11/12 h-10 lg:h-12 border-0 outline-0 pl-3 lg:p-0" placeholder="Pesquisar" />
                            <HiX className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage