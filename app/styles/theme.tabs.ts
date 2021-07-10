export default {
  baseStyle: {
    tabpanel: {
      p: 0,
      pt: 14,
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: "sm",
        py: 3,
        px: 5,
      },
    },
  },
  variants: {
    'enclosed-colored': {
      tab: {
        border: '0',
        bg: 'gray.400',
        _selected: {
          bg: 'blue.500',
          color: 'white',
        },
      },
      tablist: {
        borderBottom: '0',
      },
    }
  }
};
