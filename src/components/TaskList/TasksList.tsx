import { memo, useState } from "react";
import { ActiveTasksType, Task } from "../../types/types";
import TaskListItem from "../TaskListItem/TaskListItem";
import './TasksList.scss'

type TasksListProps = {
    classNames?: string[];
    list: Task[];
    filterBy?: ActiveTasksType;
    updateTaskList: (tasks: Task[]) => void;
}


function TasksList({ list, classNames = [], filterBy = ActiveTasksType.ALL, updateTaskList }: TasksListProps) {

    function updateTaskState(index: number, active: boolean) {
        const new_tasks = list.map((item, indx) => {
            if (indx === index) item.complete = active
            return item;
        })
        console.log(new_tasks)
        updateTaskList(new_tasks);
    }


    return (
        <div className={["listbox", ...classNames].join(' ')}>
            {list.filter((item) => {
                if (filterBy === ActiveTasksType.ALL) return item
                else if (filterBy === ActiveTasksType.ACTIVE) return item.complete === false
                else return item.complete === true
            }).map((item, index) => {
                return (
                    <div key={index} className='item'>
                        <TaskListItem
                            checked={item.complete}
                            id={index}
                            taskBody={item.taskBody}
                            onChange={updateTaskState}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default memo(TasksList);