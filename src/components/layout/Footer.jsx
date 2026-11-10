import React from 'react';

export function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-5 text-center text-xs text-slate-500 dark:text-slate-400">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                <p>DevHub Task Tracker &copy; 2026. Built with React & Tailwind CSS.</p>
                <p className="text-slate-400">Data automatically synced via LocalStorage</p>
            </div>
        </footer>
    );
}