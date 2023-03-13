import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = (props) => {
    const {className, image, status} = props;

    const config = {
        default: 'hidden',
        active: 'bg-green-500',
        absent: 'bg-gray-200',
        dnd: 'bg-red-500'
    }

    return (             
        <div className={`relative w-full aspect-square rounded-full bg-gray-300 flex items-center justify-center ${className}`}>
            {
                image 
                ? <img src="/images/home1.png" alt="user profile"/> 
                : <FontAwesomeIcon icon={faUser}/>
            }
            <div className={`absolute rounded-full right-0 bottom-0 w-1/4 aspect-square ${config[status || 'default']}`}></div>
        </div>
    );
}
 
export default Avatar;