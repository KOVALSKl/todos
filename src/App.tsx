import './App.scss';
import SelectInput from './components/SelectInput/SelectInput';
import { useState } from 'react'
import { ActiveTasksType, Task } from './types/types';
import TasksList from './components/TaskList/TasksList';
import FilterTypeButton from './components/FilterTypeButton/FilterTypeButton';


function App() {

  const [tasks, setTasks] = useState<Task[]>([
    { taskBody: 'Тестовое Задание', complete: false },
    { taskBody: 'Прекрасный код', complete: true },
    { taskBody: 'Покрытие тестами', complete: false }
  ]);
  const [showListBox, setShowListbox] = useState<boolean>(false);
  const [currentFilterType, setCurrentFilterType] = useState<ActiveTasksType>(ActiveTasksType.ALL);


  function addNewTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function clearActiveTasks() {
    setTasks(tasks.map((item) => {
      if (item.complete) item.complete = false
      return item;
    }))
  }

  return (
    <div className="App">
      <span className='title'>
        todos
      </span>
      <div className='container'>
        <SelectInput onClick={setShowListbox} onKeyDown={addNewTask} listActive={showListBox} />
        {(!showListBox || tasks.length === 0)
          ? null
          : <TasksList list={tasks} updateTaskList={setTasks} filterBy={currentFilterType} />
        }
        <div className='sub-info'>
          <span>{tasks.filter((item) => !item.complete).length} items left</span>
          <div className='sort-type-toggles-container'>
            <FilterTypeButton
              currentFilterType={currentFilterType}
              changeFilterType={ActiveTasksType.ALL}
              disabled={!showListBox}
              onClick={setCurrentFilterType}
            >
              All
            </FilterTypeButton>
            <FilterTypeButton
              currentFilterType={currentFilterType}
              changeFilterType={ActiveTasksType.ACTIVE}
              disabled={!showListBox}
              onClick={setCurrentFilterType}
            >
              Active
            </FilterTypeButton>
            <FilterTypeButton
              currentFilterType={currentFilterType}
              changeFilterType={ActiveTasksType.COMPLETED}
              disabled={!showListBox}
              onClick={setCurrentFilterType}
            >
              Completed
            </FilterTypeButton>
          </div>
          <span onClick={() => clearActiveTasks()}>Clear completed</span>
        </div>
      </div>
    </div>
  );
}

export default App;
