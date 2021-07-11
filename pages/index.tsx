import Layout from '../app/components/layouts/layout';
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PlaylistPanel from '../app/components/modules/playlist-panel';
import LessonPanel from '../app/components/modules/lesson-panel';
import { fetcher } from '../app/api/fetcher';

function Home({ lessons }) {
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
            <LessonPanel lessons={lessons} />
          </TabPanel>
          <TabPanel>
            <Heading>Exercises Panel</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Favourites Panel</Heading>
          </TabPanel>
          <TabPanel>
            <PlaylistPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export async function getStaticProps() {
  const lessons = await fetcher('/api/lessons');

  return {
    props: {
      lessons
    },
  }
}

export default Home;
