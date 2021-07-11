import React from 'react';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, HStack,
  Tag,
  Td,
  Text,
  Tr,
  useTheme
} from '@chakra-ui/react';
import { DotsVertical, Star, VolumeUp } from 'heroicons-react';
import { Lesson } from '../../types/lessons';

type Props = {
  data: Lesson;
}

const LessonRow: React.FC<Props> = ({ data }) => {
  const { colors } = useTheme();

  return <Tr>
    <Td width={100}>
      <Button colorScheme="blue">Play Session</Button>
    </Td>
    <Td width={100}>
      <Button leftIcon={<VolumeUp size={20} />} colorScheme="blue" variant="link" size="xs">
        PREVIEW
      </Button>
    </Td>
    <Td width={350}>
      <Text fontSize="sm">{data.title}</Text>
    </Td>
    <Td width={200}>
      <HStack spacing="4">
        {data.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </HStack>
    </Td>
    <Td><Text fontSize="sm">Grade {data.grade}</Text></Td>
    <Td><Text fontSize="sm">{data.genres.join(', ')}</Text></Td>
    <Td width={0}>
      <Flex>
        <Star color={colors.yellow['500']} />
        <Star color={colors.yellow['500']} />
        <Star color={colors.gray['400']} />
      </Flex>
    </Td>
    <Td width={0} padding={0} paddingRight={4}>
      <Menu colorScheme="gray">
        <MenuButton><DotsVertical size={18} /></MenuButton>
        <MenuList>
          <MenuItem>Add to Playlist</MenuItem>
        </MenuList>
      </Menu>
    </Td>
  </Tr>
};

export default LessonRow;
