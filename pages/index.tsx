import Layout from '../app/components/layouts/layout';
import SongTable from '../app/components/elements/song-table';
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

export default function Home() {
  return (
    <Layout>
      <Tabs variant="enclosed-colored" colorScheme="gray" defaultIndex={2}>
        <TabList>
          <Tab>Guided</Tab>
          <Tab>Courses</Tab>
          <Tab>Lessons</Tab>
          <Tab>Exercises</Tab>
          <Tab>Favourites</Tab>
          <Tab>Playlist</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading>Guided Panel</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Courses Panel</Heading>
          </TabPanel>
          <TabPanel>
            <SongTable></SongTable>
          </TabPanel>
          <TabPanel>
            <Heading>Exercises Panel</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Favourites Panel</Heading>
          </TabPanel>
          <TabPanel>
            <SongTable></SongTable>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}
