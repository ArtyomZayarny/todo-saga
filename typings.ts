export interface ITodo {
  id: number;
  name: string;
  status: [TodoStat];
  description: string;
}

export enum TodoStat {
  IN_PROGRESS,
  COMPLETE,
  DONE,
}
