import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import TasksList from "./TasksList";
import { ActiveTasksType, Task } from "../../types/types";
import TaskListItem from "../TaskListItem/TaskListItem";

let data: Task[] = [
    { taskBody: 'task1', complete: true },
    { taskBody: 'task2', complete: false },
    { taskBody: 'task3', complete: true }
]

let onlyComplete: Task[] = [
    { taskBody: 'task1', complete: true },
    { taskBody: 'task2', complete: false },
    { taskBody: 'task3', complete: true },
    { taskBody: 'task4', complete: false }
]

function updateTaskList(tasks: Task[]) {
    data = tasks;
}

describe('List Component', () => {
    it('List renders', () => {
        render(<TasksList list={data} updateTaskList={updateTaskList} />)

        expect(screen.getByRole('list')).toBeInTheDocument()
    })

    it('Active Tasks renders', () => {
        render(<TasksList
            list={onlyComplete}
            updateTaskList={updateTaskList}
            filterBy={ActiveTasksType.ACTIVE}
        />)
        const list = screen.getByRole('list');
        const { getAllByRole } = within(list);

        const items = getAllByRole('listitem');

        const itemsText = items.map((item) => item.textContent);

        expect(itemsText).toMatchInlineSnapshot(`
Array [
  "task2",
  "task4",
]
`)

    })

    it('Completed Tasks renders', () => {
        render(<TasksList
            list={onlyComplete}
            updateTaskList={updateTaskList}
            filterBy={ActiveTasksType.COMPLETED}
        />)
        const list = screen.getByRole('list');
        const { getAllByRole } = within(list);

        const items = getAllByRole('listitem');

        const itemsText = items.map((item) => item.textContent);

        expect(itemsText).toMatchInlineSnapshot(`
Array [
  "task1",
  "task3",
]
`)

    })
})