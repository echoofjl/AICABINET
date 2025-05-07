import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <div className={` bg-white text-center shadow-sm border hover:shadow-md transition rounded-xl`} {...props}>
    {children}
  </div>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => (
  <div className={`p-6 flex flex-col items-center space-y-4 h-full`} {...props}>
    {children}
  </div>
);