import React from 'react'

export interface InputtextProps {
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
}

const Inputtext: React.FC<InputtextProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      />
    </div>
  )
}

export default Inputtext
