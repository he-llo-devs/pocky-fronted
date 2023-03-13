import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faChartSimple,
    faCashRegister,
    faUser,
    faHome,
    faBox,
    faUsers,
    faBoxes,
    faTruck,
    faGear,
    faCircleQuestion,
    faHeadset,
    faSignOut,
    faUserTag,
    faListUl,
    faIndustry,
    faTag,
    faWallet,
    faFileInvoice,
    faArrowRightArrowLeft,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import TabItem from "../../navigation/TabItem";
import Link from "next/link";

const MenuItems = [
    {
        path: '/dashboard',
        icon: faHome
    },
    {
        icon: faBox,
        items: [
            {
                name: 'Usuarios',
                path: '/a/users',
                icon: faUsers,
            },
            {
                name: 'Sucursales',
                path: '/a/warehouses',
                icon: faIndustry,
            },
            {
                name: 'Proveedores',
                path: '/a/providers',
                icon: faTruck,
            }
        ]
    },
    {
        path: '/stats',
        icon: faChartSimple
    },
    {
        path: '/me',
        icon: faUser
    }
]

const DashTabBar = () => {
    return (
        <div className="fixed bottom-0 left-0 h-20 w-screen flex justify-around items-center bg-gray-50/80 dark:bg-gray-900/80 border-[1px] border-gray-50 dark:border-gray-800 rounded-t-3xl md:hidden backdrop-blur-sm transition-colors z-20">
            <Link href="/dashboard">
                <FontAwesomeIcon icon={faHome}/>
            </Link>
            <TabItem 
                icon={faBox} 
                items={[
                    {
                        name: 'Sucursales',
                        path: '/a/warehouses',
                        icon: faIndustry,
                    },
                    {
                        name: 'Clientes',
                        path: '/a/customers',
                        icon: faUserTag,
                    },
                    {
                        name: 'Proveedores',
                        path: '/a/suppliers',
                        icon: faTruck,
                    },
                    {
                        name: 'Productos',
                        path: '/a/products',
                        icon: faTag,
                    },
                    {
                        name: 'Inventarios',
                        path: '/i/inventory',
                        icon: faListUl,
                    }
                ]}
            />
            <div className=" w-20 h-20 rounded-full flex items-center justify-center bg-primary-600 shadow-lg shadow-primary-600/50 -translate-y-4">
                <Link href="/o/sales/new">
                    <FontAwesomeIcon
                        icon={faCashRegister}
                        className="text-white"
                        size="lg"
                    />
                </Link>
            </div>
            <TabItem
                limit={2}
                icon={faChartSimple} 
                items={[
                    {
                        name: 'Órdenes',
                        path: '/o/orders',
                        icon: faArrowRightArrowLeft,
                    },
                    {
                        name: 'Pendientes',
                        path: '/o/orders/unpaid',
                        icon: faWallet,
                    },
                    {
                        name: 'Reportes',
                        path: '/r/menu',
                        icon: faFileInvoice,
                    },
                ]}
            />
            <TabItem
                limit={1}
                icon={faUser} 
                items={[
                    {
                        name: 'Cuenta',
                        path: '/settings/account/profile',
                        icon: faGear,
                    },
                    {
                        name: 'Organización',
                        path: '/settings/organization/profile',
                        icon: faIndustry,
                    },
                    {
                        name: 'Acerca de',
                        path: '/terms',
                        icon: faCircleQuestion,
                    },
                    {
                        name: 'Soporte',
                        path: '#',
                        icon: faHeadset,
                    },
                    {
                        name: 'Cerrar sesión',
                        path: '/logout',
                        icon: faSignOut,
                    }
                ]}
            /> 
        </div>
    );
}

export default DashTabBar;