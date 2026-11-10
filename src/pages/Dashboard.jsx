import React from 'react';
import { StatsOverview } from '../components/dashboard/StatsOverview';
import { FilterBar } from '../components/dashboard/FilterBar';
import { TaskList } from '../components/tasks/TaskList';
import { TaskFormModal } from '../components/tasks/TaskFormModal';
import { DeleteConfirmModal } from '../components/tasks/DeleteConfirmModal';

export function Dashboard() {
    return (
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* 1. Analytics & Progress Bar */}
            <StatsOverview />

            {/* 2. Filters & Live Search Bar */}
            <FilterBar />

            {/* 3. Dynamic Task Cards Grid */}
            <TaskList />

            {/* Modals */}
            <TaskFormModal />
            <DeleteConfirmModal />
        </main>
    );
}