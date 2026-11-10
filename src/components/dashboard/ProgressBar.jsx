import React from 'react';

export function ProgressBar({ percent }) {
    return (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden mt-3">
            <div
                className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}