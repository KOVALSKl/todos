import { useEffect, useMemo, useState } from "react";

type TaskListItemProps = {
    checked: boolean;
    id: number;
    taskBody: string;
    onChange: (index: number, value: boolean) => void;
}

function TaskListItem({ checked, id, taskBody, onChange }: TaskListItemProps) {

    const [complete, setComplete] = useState<boolean>(checked);

    useEffect(() => {
        if (complete !== checked) {
            onChange(id, complete);
        }
    }, [complete])

    return (
        <div className="item">
            <input
                type='checkbox'
                checked={checked}
                id={`active-toggle-${id}`}
                onChange={(e) => setComplete(!complete)} />
            <label htmlFor={`active-toggle-${id}`}>{taskBody}</label>
        </div>
    );
}

export default TaskListItem;