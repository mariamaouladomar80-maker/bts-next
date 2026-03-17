"use client"
import { useState } from "react"

export default function NavMenu() {
    const [estaAbierto, setEstaAbierto] = useState(false)

    return (
        <header className="bg-fondo py-5 px-10 flex justify-between items-center h-[15vh]">
            <div href="index.html">
                <img className="w-24" src="img/logo.jpg" alt="logo de BTS" />
            </div>
            <div onClick={() => setEstaAbierto(!estaAbierto)} className="w-8 flex flex-col gap-2 lg:hidden group relative">
                <div className={("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa " ) + ( estaAbierto ? ("rotate-45 top-1/2 absolute -translate-y-1/2") : ("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa " ))}></div>
                <div className={("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa " ) + ( estaAbierto ? ("rotate-45 top-1/2 absolute -translate-y-1/2") : ("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa " ))}></div>
                <div className={("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa ") + ( estaAbierto ? ("-rotate-45 top-1/2 absolute -translate-y-1/2") : ("rounded w-full h-1 bg-white group-hover:bg-azul group-active:bg-rosa " ))}></div>
            </div>
            <nav className="hidden lg:flex">
                <ul className="text-white flex gap-4">
                    <li><a className="hover:text-morado active:text-rosa" href="#">Próximas fechas</a></li>
                    <li><a className="hover:text-morado active:text-rosa" href="#">Comprar entradas</a></li>
                    <li><a className="hover:text-morado active:text-rosa" href="#">Tienda</a></li>
                </ul>
            </nav>
            <nav className={("flex lg:hidden bg-amber-600 absolute w-full min-h-[85vh] top-[15vh] left-0 justify-around items-center ") + (estaAbierto ? ("translate-x-0") : ("translate-x-full"))}>
                <ul className="text-white items-center gap-4 flex flex-col">
                    <li><a className="hover:text-morado active:text-rosa" href="#">Próximas fechas</a></li>
                    <li><a className="hover:text-morado active:text-rosa" href="#">Comprar entradas</a></li>
                    <li><a className="hover:text-morado active:text-rosa" href="#">Tienda</a></li>
                </ul>
            </nav>
        </header >
    )
}