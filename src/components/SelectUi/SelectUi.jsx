import React from 'react'
import Select from 'react-select'
import './SelectUi.scss'

const options = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' }
]

const SelectUi = () => (
  <Select
    defaultValue={options[0]} 
    options={options}
    styles={{
      control: (provided) => ({
        ...provided,
        width: '90px',
        minHeight: '28px',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#F4FAFF',
        cursor: 'pointer'
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: '12px 6px'
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
        padding: 0
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        padding: 2
      }),
      indicatorSeparator: () => ({
        display: 'none'
      }),
      menu: (provided) => ({
        ...provided,
        width: '90px',
        borderRadius: '6px',
        backgroundColor: '#fff',
        zIndex: 10
      }),
      option: (provided, state) => ({
        ...provided,
        padding: '4px 6px',
        backgroundColor: state.isFocused ? '#f0f0f0' : '#fff',
        color: '#000',
        cursor: 'pointer'
      })
    }}
  />
)

export default SelectUi
