import { Check, Trash } from '@phosphor-icons/react'
import styles from './ToDoCard.module.css'
import { Todo } from './ToDo';

interface ToDoCardProps extends Todo {
    onChangeStatus: (id: string) => void;
}

export function ToDoCard({ id, content, finished, onChangeStatus }: ToDoCardProps) {
    return (
        <div className={styles.card}>
            <input
                type="radio"
                id={id}
                className={styles.checkbox}
                onChange={() => onChangeStatus(id)}
            />
            <label htmlFor={id} className={styles.checkmark}>{finished && (<Check size={14} weight='bold' />)}</label>
            <div className={styles.divText}>
                <p className={!finished ? styles.notCheckText : styles.checkText}>
                    {content}
                </p>
            </div>
            <div className={styles.trash}><Trash size={20} /></div>
        </div>
    )
}