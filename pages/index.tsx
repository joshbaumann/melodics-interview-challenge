import Layout from '../app/components/layouts/layout';
import LessonTable from '../app/components/elements/lesson-table';
import { Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

function Home({ lessons }) {
  return (
    <Layout>
      <Tabs variant="enclosed-colored" colorScheme="gray" defaultIndex={2} isLazy>
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
            <LessonTable lessons={lessons}></LessonTable>
          </TabPanel>
          <TabPanel>
            <Heading>Exercises Panel</Heading>
          </TabPanel>
          <TabPanel>
            <Heading>Favourites Panel</Heading>
          </TabPanel>
          <TabPanel>
            <LessonTable lessons={[]}></LessonTable>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/api/lessons`);
  const lessons = await res.json();

  return {
    props: {
      lessons,
    },
  }
}

export default Home;
