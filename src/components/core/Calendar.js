import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { CalendarProvider, ExpandableCalendar, LocaleConfig } from 'react-native-calendars';
import { getLanguage } from 'helpers';

import { FONT_FAMILY_NAME } from 'config/typography';
import COLORS from 'config/colors';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
};

if (getLanguage() === 'pt-br') LocaleConfig.defaultLocale = 'pt-br';

const StyledCalendar = ({ markedDates }) => {
  return (
    <CalendarContainer>
      <CalendarProvider>
        <ExpandableCalendar
          disablePan={true}
          disableWeekScroll={true}
          markedDates={markedDates}
          theme={{
            selectedDayBackgroundColor: COLORS.dotGreen,
            todayTextColor: COLORS.calendarBlack,
            dayTextColor: COLORS.calendarBlack,
            dotColor: COLORS.grey,
            selectedDotColor: COLORS.white,
            arrowColor: COLORS.calendarBlack,
            monthTextColor: COLORS.calendarBlack,
            textDayFontFamily: FONT_FAMILY_NAME.regular,
            textMonthFontFamily: FONT_FAMILY_NAME.regular,
            textDayHeaderFontFamily: FONT_FAMILY_NAME.regular,
            textDayFontSize: 16,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 12
          }}
        />
      </CalendarProvider>
    </CalendarContainer>
  );
};

export const CalendarContainer = styled.View`
  flex: 1;
  margin-top: 16px;
  min-height: 144px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
`;

StyledCalendar.propTypes = {
  markedDates: PropTypes.shape({
    marked: PropTypes.bool,
    dotColor: PropTypes.string
  })
};

StyledCalendar.defaultProps = {
  markedDates: {}
};

export default StyledCalendar;
