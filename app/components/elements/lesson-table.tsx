import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';
import LessonRow from './lesson-row';
import { Lessons } from '../../types/lessons';

type Props = {
  lessons: Lessons;
}

const LessonTable: React.FC<Props> = ({ lessons }) => {
  return (
    <Table variant="striped" colorScheme="gray">
      <Tbody>
        {lessons.map((lesson) => (
          <LessonRow key={lesson.id} data={lesson} />
        ))}
      </Tbody>
    </Table>
  );
};

export default LessonTable;
