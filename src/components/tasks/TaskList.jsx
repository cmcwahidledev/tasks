import React from 'react';
import { Sparkles, Plus } from 'lucide-react';
import { useTasks } from '../../context/TaskContext';
import { TaskCard } from './TaskCard';
import { Button } from '../common/Button';

export function TaskList() {
    const { filteredTasks, openAddModal } = useTasks();

    if (filteredTasks.length === 0) {
        return (
            <section className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Wax hawl ah ma jiraan!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                    Ma jiro task u dhigma raadintaada ama aadan meesha ku darin.
                </p>
                <Button onClick={openAddModal} variant="primary" size="sm" className="mt-4">
                    <Plus className="w-4 h-4 mr-1" />
                    <span>Task Cusub Ku Dar</span>
                </Button>
            </section>
        );
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </section>
    );
}