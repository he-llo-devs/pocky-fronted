import { faAngleDown, faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Select = ({ className, id, value, onChange, isLoading, disabled, items, type, style, errors }) => {

    const styles = {
        default: {
            inputWrapper : 'rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300',
            inputButton: 'py-2 pl-3 pr-10 ring-0',
            listboxOption: 'py-2 pl-10 pr-4',
            listboxSpan: 'text-left',
            listboxIcon: 'pr-2'
        },

        withoutIcon: {
            inputWrapper : 'rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300',
            inputButton: 'py-2 pl-3 pr-10 ring-0',
            listboxOption: 'py-2 px-4',
            listboxSpan: 'text-left',
            listboxIcon: 'pr-2'
        },

        simple: {
            inputWrapper : '',
            inputButton: 'py-1',
            listboxOption: 'py-2 px-2',
            listboxSpan: 'text-right mr-5',
            listboxIcon: ''
        },

        simpleLeft: {
            inputWrapper : '',
            inputButton: 'py-1',
            listboxOption: 'py-2 px-2',
            listboxSpan: 'text-left mr-5',
            listboxIcon: ''
        },
    }

    const selectedStyle = styles[style || 'default'];
    let errorStyle = ''

    if(errors?.length > 0) {
        errors.map(error => {
            if(error.target == id) errorStyle = '!border-red-400 dark:!border-red-400';
        })
    }

    return (
        <div className={`w-full ${className || ''}`}>
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                <div className="relative">
                    <div className={`relative w-full text-left ${selectedStyle.inputWrapper} ${errorStyle}`}>
                        <Listbox.Button className={`w-full border-none ${selectedStyle.inputButton} ${disabled ? 'text-gray-400 bg-gray-100 dark:text-gray-500 dark:bg-gray-700' : ''}`}>
                            <span className={`block truncate ${selectedStyle.listboxSpan} ${value ? '' : 'text-gray-400'}`}>
                                {value?.name || value?.line1 || value?.concept || value?.type || "Seleccione"}
                            </span>
                            <span className={`absolute inset-y-0 right-0 flex items-center ${selectedStyle.listboxIcon} ${disabled ? 'text-gray-400 dark:text-gray-500' : ''}`}>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute bg-white dark:bg-gray-800 z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg dark:border dark:border-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            { isLoading ? (
								<div className="relative cursor-default text-center select-none py-2 px-4">
									<FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
								</div>
                            ) : items?.length > 0 ? items.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
											`relative cursor-default select-none ${selectedStyle.listboxOption} ${active ? 'bg-primary-600 text-white' : ''
									    }`
									}
                                    value={item}
                                    disabled={item.disabled || false}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal' }`}>
                                                {type == 'person' ? `${item.name} ${item.lastname}` : null}
                                                {type == 'brand' ? `${item.name} - ${item.brand.name}` : null}
                                                {type == 'address' ? `${item.line1}` : null}
                                                {type == 'concept' ? `${item.concept}` : null}
                                                {!type ? `${item.name || item.type}` : null}
                                            </span>
                                            {
                                                item.description ?
                                                    <span className={`block text-xs opacity-80 ${selected ? 'font-light' : 'font-extralight' }`}>
                                                        {item.description}
                                                    </span>
                                                : null
                                            }
                                            { selected && style != 'simple' && style != 'simpleLeft' && style != 'withoutIcon' ? (
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-primary-600' }`}>
                                                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            )) : null}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {
                errors?.length > 0 ? errors.map((error, index) => {
                    if(error.target == id) {
                        return (
                            <p key={index} className="text-red-400 ml-1">{error.msg}</p>
                        )
                    }
                }) : null
            }
        </div>
    );
}

export default Select;