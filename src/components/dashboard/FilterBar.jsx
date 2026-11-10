import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useTasks } from '../../context/TaskContext';
import { CATEGORIES, STATUSES } from '../../utils/constants';

export function FilterBar() {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedStatus,
        setSelectedStatus
    } = useTasks();

    return (
        <section className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Raadi hawl ama sharraxaad..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                {/* Category Select */}
                <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                    >
                        {CATEGORIES.map(cat => (
                            <option key={cat} value={cat}>
                                {cat === 'All' ? 'Dhammaan Categories' : cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Status Pills */}
                <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium">
                    {STATUSES.map(st => (
                        <button
                            key={st}
                            onClick={() => setSelectedStatus(st)}
                            className={`px-3 py-1.5 rounded-lg transition ${selectedStatus === st
                                ? 'bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400 font-semibold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {st}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}