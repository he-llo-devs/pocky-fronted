import { useRouter } from "next/router";
import Link from "next/link";

const SideItem = ({path, name}) => {
    const router = useRouter();

    return (  
        <Link href={path} className={`py-2 px-6 hover:bg-green-600 ${router.pathname === path ? "font-extrabold" : null}`}>
            {name}
        </Link>
    );
}
 
export default SideItem;