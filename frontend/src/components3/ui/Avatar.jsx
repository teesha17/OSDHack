// src/components/Avatar.jsx
export function Avatar({ src, alt }) {
    return (
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={src}
        alt={alt}
        onError={(e) => { e.target.src = '/placeholder.svg'; }}
      />
    );
  }
  
  export function AvatarFallback({ children }) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
        {children}
      </div>
    );
  }
  
  export function AvatarImage({ src, alt }) {
    return <Avatar src={src} alt={alt} />;
  }
  