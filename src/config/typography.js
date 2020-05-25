import { css } from 'styled-components';

export const FONT_FAMILY_NAME = {
  regular: 'SourceSansPro-Regular',
  bold: 'SourceSansPro-Bold'
};

const FONT_FAMILY = {
  SourceSansProBold: css`
    font-family: ${FONT_FAMILY_NAME.bold};
  `,
  SourceSansProRegular: css`
    font-family: ${FONT_FAMILY_NAME.regular};
  `
};

export const TYPOGRAPHY = {
  regular: css`
    ${FONT_FAMILY.SourceSansProRegular};
  `,
  bold: css`
    ${FONT_FAMILY.SourceSansProBold};
    font-weight: 700;
  `
};
