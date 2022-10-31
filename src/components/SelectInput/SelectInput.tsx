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

    function addNewTask(code: string) {
        if (code === 'Enter' && inputValue !== '') {
            onKeyDown({ taskBody: inputValue, complete: false })
            setInputValue('')
        }
    }

    return (
        <div className="select-input">
            <img
                src={require('../../assets/Vector.svg').default}
                className={['dropdown-icon', (listActive) ? 'active' : ''].join(' ')}
                onClick={() => onClick(!listActive)}
            />
            <input
                value={inputValue}
                placeholder='What needs to be done?'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => addNewTask(e.code)} />
        </div>
    );
}

export default SelectInput;