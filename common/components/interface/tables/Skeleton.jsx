import Td from "./Td";
import Tr from "./Tr";

const Skeleton = ({cols, rows}) => {

    return (
        <>
            {[...Array(rows)].map((e, i) => (
                <Tr key={i}>
                    {[...Array(cols)].map((e, i) => (
                        <Td key={i}>
                            <div className="w-full h-4 rounded-md animate-pulse bg-gray-100 dark:bg-gray-700"></div>
                        </Td>
                    ))}
                </Tr>
            ))}
        </>
    );
}
 
export default Skeleton;