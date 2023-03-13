import Link from "next/link";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";

import { 
    faEllipsisVertical, 
    faPencil, 
    faTrash, 
    faUndo
} from "@fortawesome/free-solid-svg-icons";

const Tactions = ({item, openDeleteDialog, editHref, disabled, disabledEdit, disabledDelete, showRestore, onRestoreClick}) => {
    return (
        <td className="first:pl-5 last:pr-5 py-2 w-7 text-center">
            <Menu as="div" className="relative">
                <Menu.Button className="w-full"><FontAwesomeIcon icon={faEllipsisVertical}/></Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items as="div" className="absolute bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md border rounded-md p-1 right-0 z-10">
                        <Menu.Item disabled={disabled || disabledEdit}>
                            {({ active }) => (
                                <button
                                    disabled={disabled || disabledEdit}
                                    className={`${
                                    active ? 'bg-green-100 dark:text-gray-800' : 'disabled:text-gray-400'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all duration-200`}
                                >
                                    <Link href={editHref || "#"} className={disabled || disabledEdit ? 'pointer-events-none cursor-default' : ''}>
                                            <FontAwesomeIcon icon={faPencil} className="mr-2 h-5 w-5" aria-hidden="true"/>
                                            Editar
                                    </Link>
                                </button>
                            )}
                        </Menu.Item>
                        { !showRestore ? (
                                <Menu.Item disabled={disabled || disabledDelete}>
                                    {({ active }) => (
                                        <button
                                            disabled={disabled || disabledDelete}
                                            className={`${
                                                active ? 'bg-red-100 text-red-500' : 'text-red-400 disabled:text-gray-400'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all duration-200`}
                                            onClick={() =>openDeleteDialog(item)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="mr-2 h-5 w-5" aria-hidden="true"/>
                                            Eliminar
                                        </button>
                                    )}
                                </Menu.Item>
                            ) : (
                                <Menu.Item disabled={false}>
                                    {({ active }) => (
                                        <button
                                            disabled={false}
                                            className={`${
                                                active ? 'bg-green-100 dark:text-gray-800' : 'disabled:text-gray-400'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all duration-200`}
                                            onClick={() =>onRestoreClick(item)}
                                        >
                                            <FontAwesomeIcon icon={faUndo} className="mr-2 h-5 w-5" aria-hidden="true"/>
                                            Restaurar
                                        </button>
                                    )}
                                </Menu.Item>
                            )
                        }
                    </Menu.Items>
                </Transition>
            </Menu>
        </td>
    );
}
 
export default Tactions;