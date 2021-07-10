import { mode } from '@chakra-ui/theme-tools';

export default {
  variants: {
    striped: {
      tbody: {
        tr: {
          td: {
            border: '0',
          },
          '&:nth-of-type(odd)': (props) => ({
            td: {
              background: `gray.600`,
            },
          }),
        },
      },
    }
  }
};
