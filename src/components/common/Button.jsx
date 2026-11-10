import React from 'react';

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseStyle = 'inline-flex items-center justify-center font-medium rounded-xl transition active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20',
        secondary: 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200',
        danger: 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-500/20',
        outline: 'border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base'
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}