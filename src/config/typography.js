import { css } from 'styled-components';

const FONT_FAMILY = {
  SourceSansProBold: css`
    font-family: SourceSansPro-Bold;
  `,
  SourceSansProRegular: css`
    font-family: SourceSansPro-Regular;
  `
};

const TYPOGRAPHY = {
  regular: css`
    ${FONT_FAMILY.SourceSansProRegular};
  `,
  bold: css`
    ${FONT_FAMILY.SourceSansProBold};
    font-weight: 700;
  `
};

export default TYPOGRAPHY;
