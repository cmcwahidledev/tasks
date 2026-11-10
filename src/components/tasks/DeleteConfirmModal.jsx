import React from 'react';
import { useTasks } from '../../context/TaskContext';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { AlertTriangle } from 'lucide-react';

export function DeleteConfirmModal() {
    const { deletingTaskId, setDeletingTaskId, deleteTask } = useTasks();

    const handleConfirm = () => {
        if (deletingTaskId) {
            deleteTask(deletingTaskId);
            setDeletingTaskId(null);
        }
    };

    return (
        <Modal
            isOpen={Boolean(deletingTaskId)}
            onClose={() => setDeletingTaskId(null)}
            title="Ma hubtaa inaad tirtirto?"
        >
            <div className="space-y-4">
                <div className="flex items-center space-x-3 text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Hawshan si toos ah ayaa loo tirtirayaa, mana dib loo soo celin karo.
                    </p>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <Button variant="secondary" onClick={() => setDeletingTaskId(null)}>
                        Kanoqod
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                        Tirtir Hawsha
                    </Button>
                </div>
            </div>
        </Modal>
    );
}