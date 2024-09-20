"use client"
import React, { useState } from 'react';
import { Task } from './KanbanBoard';

interface EditTaskModalProps {
  task: Task;
  onClose: () => void;
  onSave: (id: string, title: string, description: string) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);

  const handleSave = () => {
    if (title.trim() === '') {
      alert('O título é obrigatório.');
      return;
    }
    onSave(task.id, title, description);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white w-96 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Editar Tarefa</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
