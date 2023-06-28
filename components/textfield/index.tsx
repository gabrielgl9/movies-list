import { InputHTMLAttributes } from 'react'

type TextfieldProps = InputHTMLAttributes<HTMLInputElement> & {
  extraClasses?: string
  label: string
}

export default function Textfield({
  type,
  label,
  extraClasses = '',
  ...rest
}: TextfieldProps) {
  return (
    <div className={`${extraClasses}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        className="border border-purple-400 rounded-lg w-full mt-1 p-2 outline-none"
        {...rest}
      />
    </div>
  )
}
