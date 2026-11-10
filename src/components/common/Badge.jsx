import React from 'react';

export function Badge({ priority }) {
    const styles = {
        High: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-900/50',
        Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50',
        Low: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
    };

    return (
        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-md ${styles[priority] || styles.Low}`}>
            {priority}
        </span>
    );
}