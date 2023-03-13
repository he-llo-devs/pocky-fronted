import { Fragment, useState } from 'react'
import { Combobox as Combo, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCheck, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNonInitialEffect } from '@/common/hooks/useNonInitialEffect.ts'
import Button from '../buttons/Button'

const MultiCombobox = ({items, className, value, onChange, disabled, type, onQueryChange, isLoading, placeholder, onClickAdd, onClickButton, onClickInput}) => {
    const [query, setQuery] = useState('');
	useNonInitialEffect(() => {
		if(onQueryChange) onQueryChange(query);
	}, [query])
	
    const filteredItems =
      query === ''
        ? items
        : items.filter((item) =>
            item.name.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))

			|| item.lastname?.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))

			|| item.identification?.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))

			|| item.brand?.name?.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))
        )

	const handleDelete = (item) => {
		const filtered = value.filter(v => v !== item)
		onChange(filtered);
	}

    return (
		<div className={`w-full ${className || ''}`}>
			<Combo value={value} onChange={onChange} disabled={disabled} multiple>
				<div className="relative">
					<div className="relative flex items-center px-2 w-full cursor-default overflow-hidden rounded-lg text-left border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
						<div className="max-w-[75%] py-1">
							{value?.length > 0 ? value?.map((v, index) => (
								<div key={index} className="text-sm m-0.5 inline-flex items-center space-x-2 bg-primary-600 text-white py-1 px-2 rounded-lg">
									<p className="font-light truncate">{v.name}</p>
									<button type='button' className="font-bold" onClick={() => handleDelete(v)}>x</button>
								</div>
							)) : null}
						</div>
						<Combo.Input
							onClick={onClickInput}
							className={`w-full dark:bg-gray-800 border-none py-2 pl-3 pr-10 ring-0 focus:outline-none ${disabled ? 'text-gray-400 bg-gray-100 dark:text-gray-500 dark:bg-gray-700' : ''}`}
							displayValue={(item) => ( item?.name ? item?.lastname ? `${item.name} ${item.lastname}` : item.name : '')}
							onChange={(event) => setQuery(event.target.value)}
							placeholder={ placeholder || "Seleccione..."}
						/>
						<Combo.Button  onClick={onClickButton} className={`absolute inset-y-0 right-0 flex items-center pr-2 ${disabled ? 'text-gray-400 dark:text-gray-500' : ''}`}>
							<FontAwesomeIcon
								icon={faAngleDown}
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</Combo.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combo.Options className="absolute bg-white dark:bg-gray-800 z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg dark:border dark:border-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{ isLoading ? (
								<div className="relative cursor-default text-center select-none py-2 px-4">
									<FontAwesomeIcon icon={faSpinner} className="animate-spin"/>
								</div>
							) : items?.length == 0 ? (
								<div className="relative flex items-center justify-between cursor-default select-none py-2 px-4">
									No hay datos {onClickAdd ? <Button color="primary" size="sm" onClick={onClickAdd} className="inline-flex items-center space-x-2"><span>Crear</span> <FontAwesomeIcon icon={faPlus}/></Button>  : null}
								</div>
							) : filteredItems?.length === 0 ? (
								<div className="relative flex items-center justify-between cursor-default select-none py-2 px-4">
									No existe {onClickAdd ? <Button color="primary" size="sm" onClick={onClickAdd} className="inline-flex items-center space-x-2"><span>Crear</span> <FontAwesomeIcon icon={faPlus}/></Button>  : null}
								</div>
							) : (
								<>
									{ filteredItems?.map((item, index) => (
										<Combo.Option
											key={index}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-600 text-white' : ''
												}`
											}
											value={item}
											disabled={item.disabled || false}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${selected ? 'font-medium' : 'font-normal'
															}`}
													>
															{type == 'person' ? `${item.name} ${item.lastname}` : null}
															{type == 'brand' ? `${item.name} - ${item.brand.name}` : null}
															{!type ? `${item.name}` : null}
													</span>
													{
														type ?
															<span className={`block text-sm ${selected ? 'font-light' : 'font-extralight' }`}>
																{type == 'person' ? `${item.identification}` : null}
															</span>
														: null
													}
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-primary-600'
																}`}
														>
															<FontAwesomeIcon icon={faCheck} className="h-5 w-5" aria-hidden="true" />
														</span>
													) : null}
												</>
											)}
										</Combo.Option>
									))}
									{ onClickAdd ? 
										<div className="relative cursor-default select-none py-2 px-10">
											{ onClickAdd ? <Button color="transparentPrimary" size="sm" onClick={onClickAdd} className="inline-flex items-center font-light underline px-0 space-x-2"><span>Crear +</span></Button>  : null}
										</div>
									: null}
								</>
							)}
						</Combo.Options>
					</Transition>
				</div>
			</Combo>
		</div>
    );
}
 
export default MultiCombobox;