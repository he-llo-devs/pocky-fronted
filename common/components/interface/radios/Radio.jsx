import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioGroup } from "@headlessui/react";
import Skeleton from "./Skeleton";

const Radio = ({items, label, className, value, onChange, isLoading}) => {
    return (
        <div className={`w-full pb-4 ${className}`}>
            <RadioGroup value={value} onChange={onChange}>
                <RadioGroup.Label className="sr-only">
                    {label}
                </RadioGroup.Label>
                <div className="space-y-2">
                    { isLoading 
                        ? <Skeleton/>
                        : items.map((item, index) => (
                            <RadioGroup.Option 
                                key={index} 
                                value={item} 
                                className={({ checked }) => `
                                    ${checked ? 'border border-primary' : 'border dark:border-gray-600'} 
                                    focus:outline-none relative flex justify-between items-center cursor-pointer rounded-lg px-4 py-3 shadow-sm
                                `}>

                                {({ checked }) => (
                                    <>
                                        <div className="flex flex-col">
                                            <RadioGroup.Label>
                                                <span className="font-semibold text-sm">{item.name}</span>
                                            </RadioGroup.Label>
                                            {
                                                item.description ? 
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline text-xs text-gray-500 dark:text-gray-400`}
                                                    >
                                                        <span>{item.description}</span>
                                                    </RadioGroup.Description>
                                                : null
                                            }
                                        </div>

                                        {checked && (
                                            <div className="flex-shrink-0 text-primary">
                                                <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                            </div>
                                        )}
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))   
                    }
                </div>
            </RadioGroup>
        </div>
    );
}
 
export default Radio;