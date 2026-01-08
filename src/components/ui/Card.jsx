import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg'
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${className}`
  
  const Component = hover ? motion.div : 'div'
  const motionProps = hover ? {
    whileHover: { y: -5, scale: 1.02 },
    transition: { duration: 0.2 }
  } : {}
  
  return (
    <Component className={classes} {...motionProps} {...props}>
      {children}
    </Component>
  )
}

export default Card 