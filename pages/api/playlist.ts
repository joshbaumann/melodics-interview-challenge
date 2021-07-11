import withSession from '../../app/utils/session';
import { MOCK_LESSON_DATA } from './lessons';

// Only for demo purposes
export default withSession(async (req, res) => {
  const playlist = req.session.get('playlist') || {};
  playlist.lessons = playlist.lessons || [];

  if (req.method === 'PUT') {
    const lessonId = req.body.lesson.id;
    const exists = playlist.lessons.find(lesson => lesson.id === lessonId);

    if (!exists) {
      const lesson = MOCK_LESSON_DATA.find(lesson => lesson.id === lessonId);
      playlist.lessons.push(lesson);

      req.session.set('playlist', playlist);
      await req.session.save();
    }
  } else if (req.method === 'DELETE') {
    const lessonId = req.body.lesson.id;
    playlist.lessons = playlist.lessons.filter(lesson => lesson.id !== lessonId);

    req.session.set('playlist', playlist);
    await req.session.save();
  }

  playlist.public = false;

  res.status(200).json(playlist);
});
