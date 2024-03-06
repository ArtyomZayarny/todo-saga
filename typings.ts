export interface ITodo {
  id: number;
  name: string;
  status: StatusEnum;
  description: string;
}
export type StatusEnum =
  | TodoStat.IN_PROGRESS
  | TodoStat.DONE
  | TodoStat.COMPLETE;

export enum TodoStat {
  IN_PROGRESS = "in progress",
  COMPLETE = "complete",
  DONE = "done",
}
