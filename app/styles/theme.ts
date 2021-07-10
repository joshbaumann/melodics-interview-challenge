import { extendTheme } from '@chakra-ui/react';
import Button from './theme.button';
import Tag from './theme.tag';
import Table from './theme.table';
import Menu from './theme.menu';
import Tabs from './theme.tabs';
import Drawer from './theme.drawer';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    gray: {
      900: '#1A1A1A',
      800: '#2A2A2A',
      700: '#363636',
      600: '#313131',
      400: '#4F4F50',
      300: '#98989D',
    },
    yellow: {
      500:'#FFD201',
    },
    blue: {
      500: '#2E8FC2',
    },
  },
  fonts: {
    heading: 'AV',
    body: 'AV',
  },
  components: {
    Button,
    Tag,
    Table,
    Menu,
    Tabs,
    Drawer,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.700',
        color: 'white',
      },
    },
  },
});

export default theme;
