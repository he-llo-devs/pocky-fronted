import React, {useState} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import SideItem from "@/layouts/publicLayout/SideItem";
import Badge from "@/interface/badges/Badge";

const Header = ({auth}) => {

    const [active, setActive] = useState(false); //Triggers sidebar

    const handleClick = () => {
        setActive(!active);
    };

    const year = new Date().getFullYear();

    const menu = [
        {
            name: "Inicio",
            path: "/"
        },
        {
            name: "Características",
            path: "/features"
        },
        {
            name: "Planes",
            path: "/prices"
        },
        {
            name: "Sobre nosotros",
            path: "/about"
        },
        {
            name: "Contacto",
            path: "/contact"
        }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-40">
            {/*Public bar */}
            {(!auth) && <div
                className="xl:hidden bg-neutral-900 text-neutral-50 w-384 max-w-full m-auto h-10 flex p-0 items-center text-sm leading-7 text-center lg:px-6 lg:text-left xl:px-12">
                <Link href="/signup" className="group py-5 mr-2 cursor-pointer grow shrink basis-0">
                    <p className="text-neutral-50 inline m-0">Comienza a usar Samara</p>
                    <p className="text-neutral-50 inline ml-1"></p>
                    <span className="text-neutral-50 inline ml-2 group-hover:underline">
                        Regístrate
                        <span className="">→</span>
                    </span>
                </Link>
                <div className="hidden lg:inline-flex p-0 items-center h-full">
                    <Link href="/signin" className="text-neutral-50 cursor-pointer h-full inline-flex items-center px-4 hover:underline">
                        Inicio de sesión
                    </Link>
                </div>
            </div>}

            {/* Mobile navbar */}
            <nav className="relative max-w-384 w-full m-auto px-5 flex justify-between bg-zinc-50/90 dark:bg-gray-700/80 backdrop-blur-md shadow-md shadow-primary-600/20 dark:shadow-primary-700/20 lg:hidden">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8">
                            <img src="/images/logo.png"/>
                        </div>
                        <h4 className="text-xl font-black text-gray-800 dark:text-white">Samara</h4>
                    </Link>
                    <Badge type="primary" className="mt-1">Beta</Badge>
                </div>
                {(auth) && <ul className="flex items-center p-0 list-none m-0 leading-7 text-sm my-2">
                    <li>
                        <Link href={{pathname: '/dashboard'}} className="border border-primary-600 bg-primary-600 text-neutral-50 transition-colors duration-200 ease-in delay-0 block leading-7 py-0 px-4 rounded-lg ml-4 hover:bg-primary-700">
                            Regresar
                        </Link>
                    </li>
                </ul>}
                    {(!auth) && <div className="flex">
                        <ul className="flex items-center p-0 list-none m-0 leading-7 text-sm my-2">
                            <li>
                                <Link href={{pathname: '/signin'}} className="border border-primary-600 bg-primary-600 text-neutral-50 transition-colors duration-200 ease-in delay-0 block leading-7 py-0 px-4 rounded-lg ml-4 hover:bg-primary-700">
                                    Ingresar
                                </Link>
                            </li>
                        </ul>
                        <div className="justify-self-end py-4">
                            <button className="flex content-center ml-4" onClick={handleClick}>
                                <FontAwesomeIcon icon={faBars}/>
                            </button>
                        </div>
                    </div>}
            </nav>

            {/* Desktop navbar */}
            <nav className="relative bg-zinc-50/90 dark:bg-gray-800/80 dark:shadow-primary-700/20 backdrop-blur-md shadow-md shadow-primary-600/10 font-semibold hidden w-384 max-w-full m-auto p-0 border-r-0 lg:flex lg:justify-between items-center lg:px-6 xl:px-12 rounded-b-lg">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10">
                            <img src="/images/logo.png"/>
                        </div>
                        <h4 className="text-2xl font-black text-gray-800 dark:text-white">Samara</h4>
                    </Link>
                    <Badge type="primary" className="mt-1">Beta</Badge>
                </div>
                {(!auth) && <ul className="flex items-center p-0 list-none m-0 leading-7">
                    {
                        menu.map((item, index) => (
                            <li className="px-3 cursor-pointer leading-7 transition-colors duration-200 ease-in delay-0 hover:text-primary-600"
                                key={index}>
                                <Link href={item.path} className="link-animated my-5 px-0.5 relative block">
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                    <Link href={{pathname: '/signup'}} className="border border-neutral-900 dark:border-white dark:hover:border-neutral-900 transition-colors duration-200 ease-in delay-0 block leading-7 py-0.5 px-4 rounded-lg ml-4 hover:bg-neutral-900 hover:text-neutral-50">
                        Regístrate
                    </Link>
                    <Link href={{pathname: '/signin'}} className="lg:hidden xl:inline-block border border-primary-600 bg-primary-600 text-neutral-50 transition-colors duration-200 ease-in delay-0 block leading-7 py-0.5 px-4 rounded-lg ml-4 hover:bg-primary-700">
                        Ingresar
                    </Link>
                </ul>}
                {(auth) && <ul className="flex items-center p-0 list-none m-0 leading-7">
                    <Link href={{pathname: '/dashboard'}} className="border border-primary-600 bg-primary-600 text-neutral-50 transition-colors duration-200 ease-in delay-0 block leading-7 py-0.5 px-4 rounded-lg ml-4 hover:bg-primary-700 my-4">
                        Regresar al panel de control
                    </Link>
                </ul>}
            </nav>

            {/* Mobile menu */}
            <div className={`bg-primary-800/50 text-white min-h-screen w-full fixed inset-y-0 transform ${ active ? " " : "-translate-x-full" } transition duration-200 ease-in-out z-50 backdrop-blur-md border-r border-solid border-r-white/5 drop-shadow-sm`}>
                <div className="p-6 flex justify-between">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8">
                                <img src="/images/logo.png"/>
                            </div>
                            <h4 className="text-xl font-black text-white">Samara</h4>
                        </Link>
                        <Badge type="primary" className="mt-1">Beta</Badge>
                    </div>
                    <button onClick={handleClick} aria-label="Cerrar menú" ><FontAwesomeIcon icon={faXmark}/></button>
                </div>

                <nav className="text-white flex flex-col mt-5 text-center">
                    {
                        menu.map((m, index) => (
                            <SideItem key={index}  path={m.path} name={m.name}/>
                        ))
                    }
                </nav>

                <div className="text-center my-12 flex flex-col">
                    <Link href="/signin" className="p-5">
                        Inicia sesión
                    </Link>
                    <Link href="/signup">
                        Regístrate
                    </Link>
                </div>

                <div className="absolute bottom-0 w-full mb-10">
                    <div className="text-lightBackground mt-8 text-center">
                        © {year} <span className="font-extrabold"> He-llo.</span>{" "}
                        <br className="md:hidden" /> Todos los derechos reservados
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;