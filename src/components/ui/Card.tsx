import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, boxShadow: '0 8px 40px 0 rgba(196,160,188,0.28)' } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={[
        'bg-white rounded-3xl shadow-card p-6 transition-colors duration-300',
        hover ? 'cursor-default' : '',
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  )
}
