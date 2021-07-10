import React from 'react';
import { Table, Tbody } from '@chakra-ui/react';
import SongRow from './song-row';

const SongTable: React.FC = () => {
  return (
    <Table variant="striped" colorScheme="gray">
      <Tbody>
        <SongRow />
        <SongRow />
      </Tbody>
    </Table>
  );
};

export default SongTable;
