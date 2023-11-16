/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from '@phosphor-icons/react';
import styles from './ToDo.module.css'
import { ToDoCard } from './ToDoCard';
import { useState, ChangeEvent } from 'react';

export type Todo = {
    id: string;
    content: string;
    finished: boolean;
}

export function ToDo() {
    const [todo, setTodo] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = (e: any) => {
        e.preventDefault();

        setTodo([{
            id: uuidv4(),
            content: newTodo,
            finished: false
        }, ...todo]);
        setNewTodo('');
    }

    const onChangeStatus = (id: string) => {
        const listTodos = todo.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    finished: true
                }
            }
            return item;
        });

        setTodo(listTodos);
    }

    return (
        <div>
            <form onSubmit={handleCreateTodo} className={styles.form}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newTodo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                />
                <button
                    type='submit'
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.status}>
                <p className={styles.created}>Tarefas criadas <span>{todo.length}</span></p>
                <p className={styles.finished}>Concluídas <span>{todo.filter(item => item.finished === true).length} de {todo.length}</span></p>
            </div>

            {todo.map(item => (
                <ToDoCard
                    key={item.id}
                    id={item.id}
                    content={item.content}
                    finished={item.finished}
                    onChangeStatus={onChangeStatus}
                />
            ))}
        </div>
    );
}