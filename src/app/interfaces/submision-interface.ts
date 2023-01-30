export interface ISubmission {
  workFlow: string;
  from: string;
  to: string;
  dueDate: string;
  status: Status;
}

export enum EStatus {
  Uncompleted = 'Uncomplete',
  LowRisk = 'Low Risk',
  NeedsReview = 'Needs Review',
}
type Status = 'Uncomplete' | 'Low Risk' | 'Needs Review';
