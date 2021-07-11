import React from 'react';
import { MenuItem } from '@chakra-ui/react';
import useSWR from 'swr';
import LessonRow from '../elements/lesson-row';
import { Lesson } from '../../types/lessons';
import { Playlist } from '../../types/playlist';
import LessonTable from '../elements/lesson-table';
import { fetcher } from '../../api/fetcher';
import { removeFromPlaylist } from '../../api/playlist.api';

const PlaylistPanel: React.FC = () => {
  const { data: playlist } = useSWR<Playlist>('/api/playlist', fetcher);

  const ContextMenuItems = (lesson: Lesson) => (
    <MenuItem onClick={() => removeFromPlaylist(lesson.id)}>Remove from Playlist</MenuItem>
  );

  return (
    <>
      <LessonTable>
        {playlist?.lessons.map((lesson) => (
          <LessonRow key={lesson.id} data={lesson} menuItems={ContextMenuItems(lesson)} />
        ))}
      </LessonTable>
    </>
  );
};

export default PlaylistPanel;
