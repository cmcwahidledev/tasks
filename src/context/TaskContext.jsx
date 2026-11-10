import React, { createContext, useContext, useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { INITIAL_TASKS } from '../utils/constants';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage('devhub_react_tasks', INITIAL_TASKS);

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    // Modal States
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [deletingTaskId, setDeletingTaskId] = useState(null);

    // CRUD Actions
    const addTask = (taskData) => {
        const newTask = {
            id: Date.now().toString(),
            ...taskData
        };
        setTasks(prev => [newTask, ...prev]);
    };

    const updateTask = (id, updatedData) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updatedData } : t));
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    const cycleStatus = (id) => {
        setTasks(prev => prev.map(t => {
            if (t.id === id) {
                let nextStatus = 'To Do';
                if (t.status === 'To Do') nextStatus = 'In Progress';
                else if (t.status === 'In Progress') nextStatus = 'Completed';
                return { ...t, status: nextStatus };
            }
            return t;
        }));
    };

    // Open Modals
    const openAddModal = () => {
        setEditingTask(null);
        setIsFormModalOpen(true);
    };

    const openEditModal = (task) => {
        setEditingTask(task);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setEditingTask(null);
        setIsFormModalOpen(false);
    };

    // Analytics Computation
    const stats = useMemo(() => {
        const total = tasks.length;
        const completed = tasks.filter(t => t.status === 'Completed').length;
        const pending = total - completed;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        return { total, completed, pending, percent };
    }, [tasks]);

    // Filtered Task List
    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const matchesSearch =
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = selectedCategory === 'All' || task.category === selectedCategory;
            const matchesStatus = selectedStatus === 'All' || task.status === selectedStatus;
            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [tasks, searchQuery, selectedCategory, selectedStatus]);

    const value = {
        tasks,
        filteredTasks,
        stats,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedStatus,
        setSelectedStatus,
        isFormModalOpen,
        editingTask,
        deletingTaskId,
        setDeletingTaskId,
        openAddModal,
        openEditModal,
        closeFormModal,
        addTask,
        updateTask,
        deleteTask,
        cycleStatus
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
}