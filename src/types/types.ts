export interface Task {
    taskBody: string;
    complete: boolean;
}

export enum ActiveTasksType {
    ALL,
    ACTIVE,
    COMPLETED,
}