import {
  Button,
  DrawerContent,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Image,
  DrawerBody,
  useDisclosure, Box
} from '@chakra-ui/react';
import Layout from '../app/components/layouts/layout';
import styles from './session.module.css';
import SongTable from '../app/components/elements/song-table';

export default function Session() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Box position="absolute" top={0} left={0}>
        <Image src="/session-play.png" maxHeight="100vh" />
        <Button colorScheme="blue" onClick={onOpen} className={styles.viewPlaylistBtn}>
          View Playlist
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Practice Playlist</DrawerHeader>

          <DrawerBody>
            <SongTable />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Layout>
  )
}
