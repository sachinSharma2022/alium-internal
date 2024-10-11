import React from 'react'

const RadioButton = ({ label, type, id, htmlFor, className1, className2, name, value }) => {
    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer" htmlFor={htmlFor}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    id={id}
                    className={`mr-3 w-5 h-5 appearance-none border-2 border-borderPrimary rounded-full relative peer checked:border-borderPrimary ${className1}`}
                />
                <span className={`absolute bg-primary-blue w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 left-1 ${className2}`}></span>
                {/* Organisation 1 */}
                {label}
            </label>
        </div>
    )
}

export default RadioButton
