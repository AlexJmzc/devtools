import React from 'react';

const Information = () => {
    const gitRedirect = () => {
        window.location.href("https://github.com/AlexJmzc/devtools");
    }

  return (
    <div className='flex gap-x-4 items-center w-screen bg-quaternary mt-16'>
        <p className='ml-10 w-3/5 text-lg text-justify bg-tertiary rounded-2xl p-6'>
            ¡Bienvenido a esta plataforma de herramientas para programadores!
            <br /><br />
            Este un proyecto de código abierto creado para la comunidad de desarrolladores.
            <br /><br />
            El objetivo es proporcionar una página en la que los desarrolladores puedan encontrar
            diversas herramientas y recursos para facilitar su trabajo diario como programador.
            <br /><br />
            Siéntete libre de contribuir con este proyecto a través del repositorio de GitHub.
        </p>
        <div className='flex flex-col w-2/5 justify-center items-center'>
            <img
                className='h-60 w-80 rounded-3xl' 
                src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/05/programacion-kotlin.jpg?tf=3840x" 
                alt="" 
            />
            <div 
                className='flex mt-7 gap-x-1 bg-tertiary p-2 rounded-3xl hover:cursor-pointer'
                onClick={gitRedirect}
            >
                <span className="h-8 w-8 icon-[mdi--github]"></span>
                <button className='px-0.5'>
                    GitHub
                </button>
            </div>
        </div>
    </div>
  )
}

export default Information