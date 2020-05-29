import React, { useState } from 'react'

const DropdownFilter = ({ options, value, onDropdownChange, placeholder }) => {
    const [isActiveMenu, setActiveMenu] = useState(false)

    const onActiveMenu = () => {
        setActiveMenu(!isActiveMenu)
    }

    const renderedMenu = () => {
        return (
            <div className="dropdown-menu">
                {
                    options.map((option, i) => 
                        <div key={i} className="dropdown-option">
                            <label htmlFor={option.value} className="dropdown-label">
                                {option.label}
                            </label>
                            <div className="dropdown-checkbox">
                                <input 
                                id={option.value}
                                name={option.value}
                                type="checkbox"
                                checked={value.find(val => val === option) ? true : false}
                                onChange={e => {
                                const newValue = e.target.checked ? [...value, option] : value.filter(val => val !== option)
                                onDropdownChange(newValue)
                                }}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    const renderedButton = () => {
        if (value.length) {
          placeholder = value.map(val => val.label).join(', ')
        }
    
        return (
          <button
            className="dropdown-toggle"
            onClick={onActiveMenu}
          >
            {placeholder}
          </button>
        )
      }

    return (
        <div className="dropdown">
            {renderedButton()}
            {isActiveMenu && renderedMenu()}
        </div>
    )
}

export default DropdownFilter