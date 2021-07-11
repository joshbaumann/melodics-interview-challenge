export interface Lesson {
  id: number;
  title: string;
  tags: string[];
  grade: number;
  genres: string[];
  stars: number;
}

export type Lessons = Lesson[];
