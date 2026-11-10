import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans">
          <Navbar />
          <Dashboard />
          <Footer />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}