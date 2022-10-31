import { ReactElement, ReactNode } from "react";
import { ActiveTasksType } from "../../types/types";

type FilterTypeButtonProps = {
    currentFilterType: ActiveTasksType;
    changeFilterType: ActiveTasksType;
    disabled: boolean;
    onClick: (filterType: ActiveTasksType) => void;
    children?: ReactNode | ReactElement;
}

function FilterTypeButton({ currentFilterType, changeFilterType, disabled, onClick, children }: FilterTypeButtonProps) {
    return (
        <button
            className={currentFilterType === changeFilterType ? 'active' : ''}
            disabled={disabled}
            onClick={(() => onClick(changeFilterType))}
        >
            {children}
        </button>
    );
}

export default FilterTypeButton;