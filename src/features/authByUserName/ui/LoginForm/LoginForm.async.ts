import { FC, lazy } from 'react';
import { tempPageLoading } from 'shared/temp/temp_tasks';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy < FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), tempPageLoading);
}));
