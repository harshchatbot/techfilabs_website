const Container = ({ 
  children, 
  className = '', 
  size = 'lg',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-6xl', 
    lg: 'max-w-7xl',
    xl: 'max-w-8xl'
  }
  
  const classes = `mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Container 