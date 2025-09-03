// src/components/Button.tsx
import Link from "next/link";
import Icon from "@/components/NavBar/Icon"

// Updated Button component to support theme variants
type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "link";
  isWhite?: boolean;
  isBlack?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isCircle?: boolean;
  icon?: string;
  "aria-label"?: string;
};

const Button = ({
  children,
  className = "",
  onClick,
  href,
  as = "button",
  isWhite = false,
  isBlack = false,
  isPrimary = false,
  isSecondary = false,
  isCircle = false,
  icon,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center transition-colors";
  
  // Theme-aware color variants
  const colorClasses = isPrimary 
    ? "bg-primary hover:bg-primary-dark text-white" 
    : isSecondary
    ? "bg-surface-2 hover:bg-surface-3 text-text-primary border border-border"
    : isWhite 
    ? "bg-card hover:bg-elevated text-text-primary border border-border" 
    : isBlack 
    ? "bg-dark-900 text-white hover:bg-dark-800" 
    : "bg-primary text-white hover:bg-primary-dark";
  
  const shapeClasses = isCircle ? "rounded-full w-10 h-10" : "rounded-md px-4 py-2";
  
  const classes = `${baseClasses} ${colorClasses} ${shapeClasses} ${className}`;

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {icon && <Icon name={icon} className="mr-2" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel}>
      {icon && <Icon name={icon} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;