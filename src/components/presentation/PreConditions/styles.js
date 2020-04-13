import styled from 'styled-components/native';
import COLORS from 'config/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ConditionsContainer = styled.View`
  flex: 1;
  margin: 30px 0px;
`;

export const CheckContainer = styled.View`
  border: solid 1px ${COLORS.grey};
  padding: 12px 16px;
  border-radius: 8px;
`;

export const Separator = styled.View`
  margin-top: 15px;
`;
