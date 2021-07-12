export interface TaskModel extends NonIDTaskModel {
    id: string,
}

export interface NonIDTaskModel {
    text: string,
    day: string,
    reminder: boolean
}