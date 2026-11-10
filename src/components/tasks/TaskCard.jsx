import React from 'react';
import { Folder, Calendar, Pencil, Trash2, RotateCcw, Check } from 'lucide-react';
import { useTasks } from '../../context/TaskContext';
import { Badge } from '../common/Badge';

export function TaskCard({ task }) {
    const { cycleStatus, openEditModal, setDeletingTaskId } = useTasks();
    const isDone = task.status === 'Completed';

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div>
                {/* Category & Priority Badge */}
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                        <Folder className="w-3 h-3 mr-1" />
                        {task.category}
                    </span>
                    <Badge priority={task.priority} />
                </div>

                {/* Title */}
                <h4 className={`font-semibold text-slate-900 dark:text-slate-100 text-base mb-1 ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                    {task.title}
                </h4>

                {/* Description */}
                {task.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                        {task.description}
                    </p>
                )}
            </div>

            {/* Meta & Actions */}
            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {task.dueDate || 'No date'}
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                        {task.status}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                    {/* Status Toggle Button */}
                    <button
                        onClick={() => cycleStatus(task.id)}
                        className="inline-flex items-center text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition text-slate-700 dark:text-slate-300"
                    >
                        {isDone ? (
                            <>
                                <RotateCcw className="w-3 h-3 mr-1" />
                                <span>Dib u soo celi</span>
                            </>
                        ) : (
                            <>
                                <Check className="w-3 h-3 mr-1 text-emerald-500" />
                                <span>Beddel Status</span>
                            </>
                        )}
                    </button>

                    {/* Edit / Delete Icons */}
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={() => openEditModal(task)}
                            className="p-1.5 text-slate-400 hover:text-blue-500 rounded-lg transition"
                            title="Edit Task"
                        >
                            <Pencil className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setDeletingTaskId(task.id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition"
                            title="Delete Task"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}