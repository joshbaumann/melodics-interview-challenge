export const MOCK_LESSON_DATA = [
  {
    id: 1,
    title: 'Good Friday (Beginner)',
    tags: ['Melody'],
    grade: 1,
    genres: ['Rock'],
    stars: 0
  },
  {
    id: 2,
    title: 'Island Time',
    tags: ['Melody'],
    grade: 1,
    genres: ['Electronic'],
    stars: 0
  },
  {
    id: 3,
    title: 'Osaka',
    tags: ['Rhythm'],
    grade: 1,
    genres: ['Funk'],
    stars: 0
  },
  {
    id: 4,
    title: 'Smoked Out',
    tags: ['Melody'],
    grade: 1,
    genres: ['Dance'],
    stars: 0
  },
  {
    id: 5,
    title: 'H2o',
    tags: ['Maj2', 'Interval'],
    grade: 1,
    genres: ['PC', 'Pop'],
    stars: 0
  }
];

export default function handler(req, res) {
  res.status(200).json(MOCK_LESSON_DATA);
}
