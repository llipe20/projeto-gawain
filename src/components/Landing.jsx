// PAGINA PRINCIPAL DO SISTEMA

import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsCodeSlash } from "react-icons/bs";
import Volume from "./Volume";
import Profile from "./Profile";
import API from "../api/integracao";
import '../App.css';

const LandingPage = () => {
    let search = ''
    const Searching = () => {
        const input = document.getElementById('input-search')
        search = input.value 
    }

    const Open = (id) => {
        const container = document.getElementById(id)
        container.classList.remove('hidden')
    }

    return (
        <div class="flex flex-col justify-start items-center w-screen min-h-screen bg-white lg:bg-gray-200">
            <header class="flex flex-col justify-start items-center w-full h-80 lg:h-96 backdrop relative">
                <div class="w-full h-20 bg-yellow-950 opacity-80"></div>
                {/* Caixa da logo - NÃO MEXER*/}
                <div class="flex justify-center items-center w-auto h-20 lg:h-24 bg-yellow-900 pr-4 lg:pr-6 p-2 lg:p-4 absolute top-0 left-4 lg:left-32 z-40">
                    <img className="w-16 lg:w-24" src="https://i.ibb.co/yFCP6gW/Logo-gawain.png" alt="logo-gawain" />
                    <div className="flex flex-col justify-center items-start">
                        <span className="text-sm lg:text-lg font-bold text-white sedan">projeto</span>
                        <span className="text-base lg:text-2xl font-bold text-white sedan">GAWAIN</span>
                    </div>
                </div>
                {/* Caixa do NOME & FOTO do usuário */}
                <div className="flex justify-end items-center w-1/2 h-16 lg:h-16 gap-3 text-white absolute top-0 lg:top-2 right-4 lg:right-36">
                    <span className="text-sm lg:text-base">Nome do usuário</span>

                    {/* Esse é o circulo onde fica a imagem do usuario: colocar o link da foto na tag IMG */}
                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-white z-0 cursor-pointer" onClick={() => Open('container')}>
                        <img src="" alt="" className="w-10 lg:14 rounded-full" />
                    </div>
                </div>

                <div class="flex flex-col justify-between items-center w-full h-72 relative">
                    <div className="w-full h-16 lg:h-20 bg-yellow-950 opacity-50"></div>
                    <h1 class="text-2xl lg:text-4xl font-bold text-white absolute top-8 left-4 lg:left-36 z-100">Biblioteca Digital Universitaria</h1>
                    {/* Campo de pesquisa*/}
                    <div className="flex w-full h-20 lg:h-16 justify-center items-start p-4 lg:p-0">
                        <div className="flex justify-between items-center w-full md:w-1/2 h-10 lg:h-12 text-black lg:text-lg bg-white pl-4 pr-4 rounded-lg overlow-hidden">
                            <HiOutlineSearch onClick={() => Searching()} className="cursor-pointer hover:scale-105" />
                            <input id="input-search" type="text" className="w-11/12 h-10 lg:h-12 border-0 outline-0 pl-3 lg:p-0" placeholder="Pesquisar" />
                            <HiX className="cursor-pointer hover:scale-105" />
                        </div>
                    </div>
                </div>
                {/* Pagina do perfil do usuario aqui*/}
                <Profile />
            </header>
            {/* Corpo da landing page*/}
            <main className="flex flex-col justify-start items-center w-full min-h-96 gap-4 bg-white lg:bg-gray-200">
                <div className="w-full h-5 bg-yellow-900"></div>

                <Volume estante={API(search)} name={"Resultados"} />
                <Volume estante={API('psychology')} name={"Psicologia"} />
                <Volume estante={API('java')} name={"Java"} />
                <Volume estante={API('medicine')} name={"Medicina"} />
                <Volume estante={API('engineering')} name={"Engenharia"} />
            </main>
            {/* Rodape da trem*/}
            <footer className="flex flex-col justify-center items-center w-full h-44 lg:h-52 mt-4">
                {/* Creditos */}
                <div className="flex flex-col justify-center items-center w-full h-28 lg:h-40 bg-yellow-900 text-white">
                    <div class="flex justify-center items-center w-auto h-20 lg:h-24 lg:h-32">
                        <img className="w-16 lg:w-24" src="https://i.ibb.co/yFCP6gW/Logo-gawain.png" alt="logo-gawain" />
                        <div className="flex flex-col justify-center items-start">
                            <span className="text-sm lg:text-lg font-bold text-white sedan">projeto</span>
                            <span className="text-base lg:text-2xl font-bold text-white sedan">GAWAIN</span>
                        </div>
                        
                    </div>
                    <span className="mb-4 lg:text-base text-sm w-3/4 text-center">
                        Criado e desenvolvido por <a href="">Triplice Entente</a> &copy; 2024
                    </span>
                </div>
                <nav className="flex justify-center items-center gap-5 w-full h-12 bg-yellow-800 text-white">
                    <a class="hover:scale-110" target="_blank" href="https://www.linkedin.com/in/felipe-silva--/"><FaLinkedinIn /></a>
                    <a class="hover:scale-110" target="_blank" href="https://github.com/llipe20"><FaGithub /></a>
                    <a class="hover:scale-110" target="_blank" href="https://www.instagram.com/___llpe/"><FaInstagram /></a>
                    <a class="hover:scale-110" target="_blank" href="https://api.whatsapp.com/qr/O43EG6NVZ3QCE1?autoload=1&app_absent=0"><FaWhatsapp /></a>
                    <a class="hover:scale-110" target="_blank" href="https://portfolio-felipe-gamma.vercel.app/"><BsCodeSlash /></a>
                </nav>
            </footer>
        </div>
    )
}

export default LandingPage