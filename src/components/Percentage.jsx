// src/components/Percentage.jsx
const Percentage = ({ value, className = "" }) => {
    const isPositive = value >= 0;
    
    return (
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            isPositive 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
        } ${className}`}>
            <span className={isPositive ? "mr-1" : ""}>
                {isPositive ? "↑" : "↓"}
            </span>
            {Math.abs(value)}%
        </div>
    );
};

export default Percentage;