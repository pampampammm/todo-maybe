import React, { memo } from 'react';
import { useAppDispatch } from 'app/StoreProvider';
import { useSelector } from 'react-redux';

import { Page } from 'widgets/Page';

import { pageReducer } from 'pages/model/slice/pageSlice';
import { useInitPageEffect } from 'pages/model/lib/useInitPageEffect';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { getPageLoading } from 'pages/model/selectors/pageSelectors';
import { DynamicStoreReducerWrapper } from 'shared/components/DynamicStoreReducerWrapper';
import { CalendarTabs } from '../CalendarTabs';
import CalendarHeader from './CalendarHeader/CalendarHeader';

const CalendarPage = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPageLoading);

    useInitPageEffect(() => {
        dispatch(fetchTasks());
    });

    return (
        <DynamicStoreReducerWrapper reducerKey="page" reducer={pageReducer} removeAfterUnmount={false}>
            <Page>
                <CalendarHeader />
                <CalendarTabs isLoading={isLoading} />
            </Page>
        </DynamicStoreReducerWrapper>
    );
});

export default CalendarPage;
