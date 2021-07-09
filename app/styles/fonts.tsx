import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'AV';
        src: url('fonts/avenir/2E86E0_0_0.woff');
        font-weight: bold;
        font-style: normal;
      }
      @font-face {
        font-family: 'AV';
        src: url('fonts/avenir/2E86E0_1_0.woff');
        font-weight: bold;
        font-style: italic;
      }
      @font-face {
        font-family: 'AV';
        src: url('fonts/avenir/2E86E0_3_0.woff');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'AV';
        src: url('fonts/avenir/2E86E0_2_0.woff');
        font-weight: normal;
        font-style: italic;
      }
    `}
  />
)
export default Fonts;
