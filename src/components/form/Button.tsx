import React from 'react'

// กำหนด interface สำหรับ props ของปุ่ม
export interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {label}
    </button>
  )
}

export default Button
