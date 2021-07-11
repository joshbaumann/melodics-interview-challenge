import React from 'react';
import Link from 'next/link';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  HStack,
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
  menuItems?: React.ReactElement
}

const LessonRow: React.FC<Props> = ({ data, menuItems }) => {
  const { colors } = useTheme();

  return <Tr>
    <Td width={100}>
      <Link href="/session">
        <Button colorScheme="blue">Play Session</Button>
      </Link>
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
          <Tag key={tag}>{tag}</Tag>
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
    { menuItems &&
      <Td width={0} padding={0} paddingRight={4}>
        <Menu colorScheme="gray" isLazy>
          <MenuButton><DotsVertical size={18}/></MenuButton>
          <MenuList>
            {menuItems}
          </MenuList>
        </Menu>
      </Td>
    }
  </Tr>
};

export default LessonRow;
