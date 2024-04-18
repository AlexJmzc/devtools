import React from "react";
import Logo from "../../assets/img/LogoDT.png";

const Header = () => {
  return (
    <>
      <header className="bg-primary h-20 text-center flex items-center justify-around text-quaternary  ">
        <div className="flex items-center gap-x-2">
          <img className="h-8 w-8" src={Logo} alt="DevTools"/>
          <h1 className="font-bold">DEV TOOLS</h1>
        </div>

        <ul className="flex gap-x-6">
          <li className="flex items-center gap-x-1">
            <span className="icon-[carbon--color-palette]"></span>
            <a href="/color">Paletas de colores</a>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="icon-[ph--pen-nib-duotone]"></span>
            <a href="/fonts">Fuentes</a>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="icon-[material-symbols--texture-sharp]"></span>
            <a href="/textures">Texturas</a>
          </li>
          <li className="flex items-center gap-x-1">
            <span className="icon-[material-symbols-light--video-library-rounded]"></span>
            <a href="/creators">Creadores de contenido</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
