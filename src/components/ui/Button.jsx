import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark focus:ring-brand-light shadow-lg hover:shadow-xl",

    secondary:
      "bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white focus:ring-brand-light",

    outline:
      "bg-transparent text-zinc-200 border-2 border-zinc-600 hover:border-brand hover:text-brand focus:ring-brand-light",

    ghost:
      "bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white focus:ring-white/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className={`w-5 h-5 ${children ? "mr-2" : ""}`} />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className={`w-5 h-5 ${children ? "ml-2" : ""}`} />
      )}
    </motion.button>
  );
};

export default Button;
