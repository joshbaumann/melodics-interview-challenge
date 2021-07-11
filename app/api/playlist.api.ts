import { fetcher } from './fetcher';
import { mutate } from 'swr';
import { trackEvent } from '../utils/events';

export const addToPlaylist = async (id: number) => {
  await fetcher('/api/playlist', {
    method: 'PUT',
    body: JSON.stringify({ lesson: { id } }),
  });
  mutate('/api/playlist');
  trackEvent('Lesson added to playlist', { id });
};

export const removeFromPlaylist = async (id: number) => {
  await fetcher('/api/playlist', {
    method: 'DELETE',
    body: JSON.stringify({ lesson: { id } }),
  });
  mutate('/api/playlist');
  trackEvent('Lesson removed from playlist', { id });
};
