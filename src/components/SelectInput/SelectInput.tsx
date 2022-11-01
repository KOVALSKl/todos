import { useState } from "react";
import { Task } from "../../types/types";
import './SelectInput.scss'

type SelectInputProps = {
    onKeyDown: (task: Task) => void;
    onClick: (e: boolean) => void;
    listActive: boolean;
}

function SelectInput({ onKeyDown, onClick, listActive }: SelectInputProps) {

    const [inputValue, setInputValue] = useState<string>('');

    function addNewTask() {
        if (inputValue !== '') {
            onKeyDown({ taskBody: inputValue, complete: false })
            setInputValue('')
        }
    }

    return (
        <form
            className="select-input"
            onSubmit={(e) => {
                e.preventDefault()
                addNewTask()
            }}>
            <img
                src={require('../../assets/Vector.svg').default}
                alt="tasks list"
                className={['dropdown-icon', (listActive) ? 'active' : ''].join(' ')}
                onClick={() => onClick(!listActive)}
            />
            <input
                value={inputValue}
                placeholder='What needs to be done?'
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
}

export default SelectInput;