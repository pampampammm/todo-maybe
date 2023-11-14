import { Page, PageHeader } from 'widgets/Page';

import { useAppDispatch } from 'app/StoreProvider';

import { getParsedDate } from 'shared/lib/helpers/getFormattedDate';
import DatePickerPopup from 'shared/ui/Calendar/ui/DatePickerPopup/DatePickerPopup';
import { getWeekDatesNumbersInAMonth } from 'shared/lib/hooks/useCalendar/lib/helpers';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const dispatch = useAppDispatch();


    return (
        <Page className={styles.page}>
            <PageHeader className={styles.header}>
                <h5>Test Page</h5>
            </PageHeader>
        </Page>
    );
};

export default AboutPage;
