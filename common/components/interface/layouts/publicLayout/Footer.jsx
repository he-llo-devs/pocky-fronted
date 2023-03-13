import React from "react";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


const Footer = ({className}) => {
    return(
        <React.Fragment>
            <div className="pt-5">
                <footer className="lg:max-w-384 lg:w-full lg:mx-auto lg:pt-5">
                    <section className="mt-12 p-10 border-t border-b-neutral-200 hidden lg:flex relative">
                        <div className="leading-9 dark:text-zinc-200 text-neutral-500 grow shrink basis-0">
                            © 2022 <span className="text-blue-500 font-bold">he-llo.</span> Todos los derechos reservados.
                        </div>
                        <div className="leading-9 text-neutral-500 flex-initial inline-flex items-center gap-2.5">
                            <Link href="/terms" className="hover:text-primary-600 dark:text-zinc-200">
                                Términos
                            </Link>
                            •
                            <Link href="/privacy" className="hover:text-primary-600 dark:text-zinc-200">
                                Privacidad
                            </Link>
                            {/*•
                                <Link href="/security">
                                    <a className="hover:text-primary-600 dark:text-zinc-200">Seguridad</a>
                            </Link>*/}
                            {/*•
                            <Link href="/help">
                                <a className="hover:text-primary-600 dark:text-zinc-200">Ayuda</a>
                            </Link>*/}
                        </div>
                        <div className="leading-9 text-neutral-500 flex-initial inline-flex items-center gap-4 ml-12">
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faFacebookF} size="lg"/>
                            </a>
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faTwitter} size="lg"/>
                            </a>
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faInstagram} size="lg"/>
                            </a>
                        </div>
                    </section>
                    <section className="mt-12 block lg:hidden">
                        <div className="flex ml-4 gap-7 text-neutral-500">
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faFacebookF} size="lg"/>
                            </a>
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faTwitter} size="lg"/>
                            </a>
                            <a href="#" className="">
                                <FontAwesomeIcon className="text-highContrast dark:text-lightBackground hover:text-primary-600" icon={faInstagram} size="lg"/>
                            </a>
                        </div>
                        <div className="flex ml-4 my-5 gap-2.5 text-neutral-500">
                            <Link href="/terms" className="hover:text-primary-600 dark:text-zinc-200">
                                Términos
                            </Link>
                            •
                            <Link href="/privacy">
                                Privacidad
                            </Link>
                            •
                            <Link href="/security">
                                Seguridad
                            </Link>
                            •
                            <Link href="/help">
                                Ayuda
                            </Link>
                        </div>
                        <div className="p-4 border-t border-b-neutral-300 dark:text-zinc-200 text-neutral-500 leading-9 grow shrink basis-0">
                            © 2022 <span className="text-blue-500 font-bold">he-llo.</span> Todos los derechos reservados.
                        </div>
                    </section>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Footer;