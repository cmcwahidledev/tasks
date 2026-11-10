import React from 'react';
import { LayoutGrid, Clock, CheckCircle2 } from 'lucide-react';
import { useTasks } from '../../context/TaskContext';
import { ProgressBar } from './ProgressBar';

export function StatsOverview() {
    const { stats } = useTasks();

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Dhammaan Tasks
                    </p>
                    <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">{stats.total}</h3>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <LayoutGrid className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Socda (Pending)
                    </p>
                    <h3 className="text-3xl font-bold mt-1 text-amber-500">{stats.pending}</h3>
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl">
                    <Clock className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Dhamaaday (Done)
                    </p>
                    <h3 className="text-3xl font-bold mt-1 text-emerald-500">{stats.completed}</h3>
                </div>
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Completion Rate
                    </p>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{stats.percent}%</span>
                </div>
                <ProgressBar percent={stats.percent} />
            </div>
        </section>
    );
}