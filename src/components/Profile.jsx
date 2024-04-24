// COMPONENTE DE PERFIL: AQUI DEVERÃO SER CONFIGURADO TUDO RELACIONADO AO PERFIL, REQUISITOS:
// 1. SE O USUARIO ESTIVER LOGADO, DEVE APARECER A FOTO E NOME DELE, ADICIONE MAIS COISAS SE QUISER
// 2. USUARIO PODE EDITAR TANTO FOTO COMO O NOME DELE
// 3. SE O USUARIO NÃO TIVER LOGADO, DEVE APARECER UMA OPÇÃO PARA ELE LOGAR (E SER REDIRECIONADO A TEALA DE LOGIN)
// 4. DEVERÃO APARECER TAMBEM ITEMS RELACIONADOS AO USUARIO, COMO LIVROS QUE ELE FAVORITOU POR EXEMPLO, OU OUTRA COISA, COMO QUISEREM

import { TfiClose } from "react-icons/tfi";
import React from "react";

const Close = () => {
    const container = document.getElementById('container')
    container.classList.add('hidden')
}

const Profile = () => {
    return (
        <div id="container" className="flex flex-col justify-start items-center gap-2 w-3/4 lg:w-1/3 h-screen bg-white p-5 absolute top-0 right-0 z-50 hidden">
            <div className="flex justify-end items-center w-full h-auto">
                <button onClick={() => Close()}><TfiClose /></button>
            </div>
            <div className="w-16 lg:w-32 h-16 lg:h-32 rounded-full bg-gray-300">
                {/*FOTO DO USUARIO AQUI*/}
            </div>
            <span className="text-lg lg:text-2xl mt-2">
                Usuario name
            </span>
        </div>
    )
}

export default Profile