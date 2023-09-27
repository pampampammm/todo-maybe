import React from 'react';

import styles from './TaskDetails.module.scss'
import {StyledProps} from "shared/types/types";
import classNames from "classnames";

interface DetailsProps extends StyledProps {

}

const TaskDetails = (props : DetailsProps) => {
    const {className} = props

    return (
        <section className={classNames(styles.section, [className])}>
asafas
        </section>
    );
};

export default TaskDetails;