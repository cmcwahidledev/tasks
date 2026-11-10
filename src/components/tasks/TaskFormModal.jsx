import React, { useState, useEffect } from 'react';
import { useTasks } from '../../context/TaskContext';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { CATEGORIES, PRIORITIES, STATUSES } from '../../utils/constants';

export function TaskFormModal() {
    const { isFormModalOpen, closeFormModal, editingTask, addTask, updateTask } = useTasks();

    const [formData, setFormData] = useState({
        title: '',
        category: 'Frontend',
        priority: 'Medium',
        status: 'To Do',
        dueDate: '',
        description: ''
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                category: editingTask.category,
                priority: editingTask.priority,
                status: editingTask.status,
                dueDate: editingTask.dueDate || '',
                description: editingTask.description || ''
            });
        } else {
            setFormData({
                title: '',
                category: 'Frontend',
                priority: 'Medium',
                status: 'To Do',
                dueDate: new Date().toISOString().split('T')[0],
                description: ''
            });
        }
    }, [editingTask, isFormModalOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        if (editingTask) {
            updateTask(editingTask.id, formData);
        } else {
            addTask(formData);
        }
        closeFormModal();
    };

    const availableCategories = CATEGORIES.filter(c => c !== 'All');
    const availableStatuses = STATUSES.filter(s => s !== 'All');

    return (
        <Modal
            isOpen={isFormModalOpen}
            onClose={closeFormModal}
            title={editingTask ? 'Wax ka beddel Hawsha' : 'Task Cusub Ku Dar'}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Magaca Hawsha *"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Tusaale: Redesign Landing Page Navbar"
                />

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            Category
                        </label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                        >
                            {availableCategories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            Priority
                        </label>
                        <select
                            value={formData.priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                        >
                            {PRIORITIES.map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            Status
                        </label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                        >
                            {availableStatuses.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Sharraxaad (Description)
                    </label>
                    <textarea
                        rows="3"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Faahfaahin dheeraad ah oo ku saabsan task-ga..."
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100"
                    />
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Button type="button" variant="secondary" onClick={closeFormModal}>
                        Baaji
                    </Button>
                    <Button type="submit" variant="primary">
                        Kaydi Hawsha
                    </Button>
                </div>
            </form>
        </Modal>
    );
}