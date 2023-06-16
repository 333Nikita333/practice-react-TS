import { ReactNode } from 'react';

export interface IAppProps {
  good: number;
  neutral: number;
  bad: number;
}

export interface ISectionFeedbackProps {
  title: string;
  children: ReactNode;
}

export interface IFeedbackProps {
  options: string[];
  onLeaveFeedback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IStatisticProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export interface INotificationProps {
  message: string;
}
