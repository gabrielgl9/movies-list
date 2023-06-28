import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  extraClasses?: string
  text: string
}

export default function Button({
  type,
  text,
  extraClasses = '',
  ...rest
}: ButtonProps) {
  return (
    <div className={`${extraClasses}`}>
      <button type={type} {...rest}>
        {text}
      </button>
    </div>
  )
}
