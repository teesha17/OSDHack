// src/components/Card.jsx
export function Card({ children, className = "" }) {
    return (
      <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardHeader({ children }) {
    return (
      <div className="p-4 border-b">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return (
      <div className="p-4">
        {children}
      </div>
    );
  }
  
  export function CardFooter({ children }) {
    return (
      <div className="p-4 border-t">
        {children}
      </div>
    );
  }
  
  export function CardTitle({ children }) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
  