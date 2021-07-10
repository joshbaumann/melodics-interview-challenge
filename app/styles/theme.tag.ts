export default {
  baseStyle: {
    container: {
      position: 'relative',
      borderRadius: 'sm',
      textTransform: 'uppercase',
      _before: {
        content: '""',
        width: '0',
        height: '0',
        position: 'absolute',
        left: '0',
        transform: 'translateX(-100%)',
        borderStyle: 'solid',
        borderWidth: '5px 5px 5px 0',
        borderColor: 'transparent',
        borderRightColor: 'gray.300',
      }
    },
  },
  sizes: {
    md: {
      container: {
        borderRadius: 'none',
        fontSize: '10',
        fontWeight: 'bold',
      },
    },
  },
  variants: {
    subtle: {
      container: {
        bg: 'gray.300',
        color: 'white'
      }
    }
  }
};
