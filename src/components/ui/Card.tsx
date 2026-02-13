import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-card border border-border rounded-xl ${hover ? 'hover:shadow-md transition-all' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-6 border-b border-border ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-6 pt-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
