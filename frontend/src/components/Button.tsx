import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, className, children, disabled, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-josefin font-semibold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full';

    const variants = {
      primary:
        'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-maroon-950 shadow-gold hover:from-gold-400 hover:via-gold-300 hover:to-gold-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      outline:
        'border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-maroon-950 hover:shadow-gold hover:-translate-y-0.5 active:translate-y-0',
      ghost:
        'text-gold-400 hover:text-gold-300 hover:bg-maroon-800/50',
    };

    const sizes = {
      sm: 'text-xs px-5 py-2',
      md: 'text-sm px-8 py-3.5',
      lg: 'text-sm px-10 py-4',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Analyzing...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
