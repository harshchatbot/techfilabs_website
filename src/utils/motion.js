// A "Fade Up" animation for standard sections
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom bezier for "heavy" feel
    }
  };
  
  // A "Stagger" container. Apply this to the parent grid (<ul> or <div>).
  // It tells all children to wait for the previous one before showing.
  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // 0.1s delay between each child
        delayChildren: 0.3,
      }
    }
  };
  
  // Use this for the child items inside a grid (Services, Testimonials)
  export const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  // A "Zoom In" effect for the About Card
  export const zoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };