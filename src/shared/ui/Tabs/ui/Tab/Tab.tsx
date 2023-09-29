import React from 'react';

export interface TabProps {
    value?: string
    className?: string,
    children: React.ReactElement,
    label?: string
}

const Tab = (props : TabProps) => {
    const { className, value, children } = props;

    return (
        <div>
            {children}
        </div>
    );
};

export default Tab;
