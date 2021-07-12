import { TaskModel } from "./TaskModel";

export interface TaskProps {
    task: TaskModel
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

export interface TasksProps {
    tasks: TaskModel[]
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
}

export interface HeaderProps {
    title?: string;
    onAdd: () => void;
    showAdd: boolean;
}

export interface ButtonProps {
    text: string;
    color: string;
    onClick: () => void;
}
