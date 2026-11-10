import React from 'react';

export function Input({ label, error, className = '', ...props }) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100 transition ${className}`}
                {...props}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}