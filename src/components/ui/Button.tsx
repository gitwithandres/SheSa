import React from 'react'

type Variant = 'primary' | 'outline' | 'whatsapp' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  target?: string
  rel?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-cta text-white shadow-soft hover:shadow-hover hover:scale-[1.03] active:scale-[0.98]',
  outline:
    'bg-transparent border-2 border-primary-lilac text-primary-lilac hover:bg-primary-pink/20 hover:scale-[1.03]',
  whatsapp:
    'bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5d] hover:shadow-hover hover:scale-[1.03] active:scale-[0.98]',
  ghost:
    'bg-white/60 text-primary-lilac hover:bg-white hover:shadow-card hover:scale-[1.03]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-all duration-300 cursor-pointer select-none'

  const classes = [base, variantStyles[variant], sizeStyles[size], className].join(' ')

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
