import React, { useMemo } from 'react';
import { PageHeader } from 'widgets/Page';
import { getWeekDatesNumbersInAMonth } from 'shared/lib/hooks/useCalendar/lib/helpers';
import { useSelector } from 'react-redux';
import { getCalendarPageTab, getPanelDate } from 'pages/ui/CalendarPage/model/selectors/getCurrentDate/getCurrentDate';
import { shortMonths } from 'shared/lib/helpers/getFormattedDate';
import { CalendarPageTabs } from 'pages/ui/CalendarPage/model/types/types';

const CalendarHeader = () => {
    const currentDate = useSelector(getPanelDate);
    const tab = useSelector(getCalendarPageTab);

    const header = useMemo(() => {
        const { year, date, month } = currentDate;

        if (currentDate.date && tab === 'week') {
            const [start, end] = getWeekDatesNumbersInAMonth(year, month, date);
            return <span>{`${start} - ${end} ${shortMonths[month]} `}</span>;
        }

        if (currentDate.date && tab === CalendarPageTabs.MONTH) {
            return <span>{`${shortMonths[month]} ${year} `}</span>;
        }

        return <span>Calendar</span>;
    }, [currentDate, tab]);

    return (
        <PageHeader>
            {header}
        </PageHeader>
    );
};

export default CalendarHeader;
