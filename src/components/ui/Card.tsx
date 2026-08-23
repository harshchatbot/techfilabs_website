"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg" | "xl";
  hover?: boolean;
}

const Card = ({
  children,
  className = "",
  padding = "md",
  hover = false,
  ...props
}: CardProps) => {
  const baseClasses = "bg-white rounded-2xl shadow-lg";

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const classes = `${baseClasses} ${paddingClasses[padding]} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
};

export default Card;
