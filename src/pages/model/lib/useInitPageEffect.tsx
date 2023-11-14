import { useEffect } from 'react';
import { fetchTasks } from 'pages/model/services/fetchTasks';
import { useAppDispatch } from 'app/StoreProvider';
import { getPageInitited } from 'pages/model/selectors/pageSelectors';
import { useSelector } from 'react-redux';

export const useInitPageEffect = (callback: () => void) => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getPageInitited);

    useEffect(() => {
        if (!inited) {
            callback();
        }
    }, [dispatch]);
};
