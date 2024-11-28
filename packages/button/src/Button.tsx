import type { HTMLAttributes, JSX, ReactNode } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({
  onClick,
  children
}: Readonly<ButtonProps>): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded border-none bg-[#007BFF] px-4 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-[#0056B3]"
    >
      {children}
    </button>
  )
}
