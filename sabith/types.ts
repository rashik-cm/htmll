
export enum LessonStatus {
  LOCKED = 'LOCKED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  initialCode: string;
  isPremium: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface UserState {
  completedLessons: string[];
  isSubscribed: boolean;
  currentLessonId: string;
}
