import React from 'react';
import { MenuItem, useToast } from '@chakra-ui/react';
import LessonRow from '../elements/lesson-row';
import { Lessons, Lesson } from '../../types/lessons';
import LessonTable from '../elements/lesson-table';
import { addToPlaylist } from '../../api/playlist.api';

type Props = {
  lessons: Lessons;
}

const LessonPanel: React.FC<Props> = ({ lessons }) => {
  const toast = useToast();

  const handleAddToPlaylist = (id: number) => {
    addToPlaylist(id);
    toast({
      position: 'top-right',
      title: 'Lesson added to Playlist',
      status: 'success',
      isClosable: true,
      duration: 2000,
    })
  };

  const ContextMenuItems = (lesson: Lesson) => (
    <MenuItem onClick={() => handleAddToPlaylist(lesson.id)}>Add to Playlist</MenuItem>
  );

  return (
    <LessonTable>
      {lessons.map((lesson) => (
        <LessonRow key={lesson.id} data={lesson} menuItems={ContextMenuItems(lesson)} />
      ))}
    </LessonTable>
  );
};

export default LessonPanel;
