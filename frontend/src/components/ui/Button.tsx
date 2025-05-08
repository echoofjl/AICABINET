import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className = '', children, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition w-full text-sm ${className}";
  const variantStyle =
    variant === "outline"
      ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};
