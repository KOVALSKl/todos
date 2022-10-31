import { Task } from "../../types/types";

type TaskListItemProps = {
    checked: boolean;
    id: number;
    task: Task;
    onChange: (task: Task, value: boolean) => void;
}

function TaskListItem({ checked, id, task, onChange }: TaskListItemProps) {

    return (
        <li className="item">
            <input
                type='checkbox'
                checked={task.complete}
                id={`active-toggle-${id}`}
                onChange={(e) => onChange(task, !checked)}
            />
            <label htmlFor={`active-toggle-${id}`}>{task.taskBody}</label>
        </li>
    );
}

export default TaskListItem;