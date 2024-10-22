// src/components/Button.jsx
export default function Button({ children, variant = "default", size = "normal", ...props }) {
    let classes = "px-4 py-2 font-medium text-white bg-blue-600 rounded";
    
    if (variant === "outline") {
      classes = "px-4 py-2 font-medium text-blue-600 border border-blue-600 rounded";
    }
  
    if (size === "icon") {
      classes = "p-2 text-blue-600";
    }
  
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }
  