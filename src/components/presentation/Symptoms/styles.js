import styled from 'styled-components/native';
import COLORS from 'config/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const SymptomsContainer = styled.View`
  flex: 1;
  margin: 30px 0px;
`;

export const CheckContainer = styled.View`
  border: solid 1px ${COLORS.grey};
  padding: 12px 16px;
  border-radius: 8px;
`;

export const SelectedContainer = styled.View`
  background-color: ${COLORS.greyLight};
  padding: 12px 16px;
  border-radius: 8px;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
`;

export const CalendarContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.grey};
`;

export const Separator = styled.View`
  margin-top: 15px;
`;
