import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';

const LessonTable: React.FC = ({ children }) => {
  return (
    <Table variant="striped" colorScheme="gray">
      <Tbody>
        {children}
      </Tbody>
    </Table>
  );
};

export default LessonTable;
