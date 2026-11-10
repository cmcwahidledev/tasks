import React from 'react';
import { Code2, Plus, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useTasks } from '../../context/TaskContext';
import { Button } from '../common/Button';

export function Navbar() {
    const { darkMode, toggleTheme } = useTheme();
    const { openAddModal, stats } = useTasks();

    return (
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-500/20">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                    DevHub
                                </h1>
                                <span className="text-[10px] font-semibold bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                                    {stats.total} Tasks
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                React Project & Task Tracker
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
                            aria-label="Toggle Dark/Light Mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                        </button>

                        <Button onClick={openAddModal} variant="primary" size="md">
                            <Plus className="w-4 h-4 mr-1.5" />
                            <span>Task Cusub</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}