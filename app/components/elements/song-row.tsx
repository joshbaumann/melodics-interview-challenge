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

const SongRow: React.FC = () => {
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
      <Text fontSize="sm">Island Time</Text>
    </Td>
    <Td width={200}>
      <HStack spacing="4">
        <Tag>Rhythm</Tag>
        <Tag>Rhythm</Tag>
      </HStack>
    </Td>
    <Td><Text fontSize="sm">Grade 1</Text></Td>
    <Td><Text fontSize="sm">Rock</Text></Td>
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
          <MenuItem>Add to Practice Playlist</MenuItem>
        </MenuList>
      </Menu>
    </Td>
  </Tr>
};

export default SongRow;
