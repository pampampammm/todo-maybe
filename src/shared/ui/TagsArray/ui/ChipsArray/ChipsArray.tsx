import React, { ChangeEvent, useMemo, useState } from 'react';

import { Tag } from 'entities/Tags';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import classNames from 'classnames';

import styles from './ChipArray.module.scss';

interface ChipsProps {
    items: Tag[]
    onChange?: (item: Tag) => void
    className?: string,
    id?: string
    editable?: boolean
    maxLength?: number
}

const ChipsArray = (props: ChipsProps) => {
    const {
        onChange,
        className,
        items,
        id,
        editable,
        maxLength = 0,
    } = props;

    const [createTagMode, setCreateTagMode] = useState<boolean>(false);
    const [newTagValue, setTagValue] = useState<string>('');

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTagValue(e.target.value);
    };

    const onTagsChangeSubmit = () => {
        if (newTagValue === '') {
            setCreateTagMode(false);
        } else {
            const newTag: Tag = {
                id: items.length + 1,
                value: newTagValue,
            };
            setTagValue('');

            setCreateTagMode(false);
            if (onChange) {
                onChange(newTag);
            }
        }
    };

    if (items === undefined) {
        return null;
    }

    const renderItems = useMemo(() => {
        const length = maxLength === 0 ? items.length : maxLength;
        const splicedArray = items.slice(0, length);

        return splicedArray?.map((value) => (
            <li
                className={styles.item}
                key={value.id}
            >
                {value.value}
            </li>
        ));
    }, [items, createTagMode]);

    return (
        <div className={classNames(styles.tagsRow, [className])}>
            {renderItems && renderItems}
            {editable && (
                <div className={styles.item}>
                    <Input
                        id={id}
                        theme={InputTheme.CLEAR}
                        className={styles.tagInput}
                        value={newTagValue}
                        onChange={handleValueChange}
                        placeholder="Add item..."
                    />
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.submitAddBtn}
                        onClick={onTagsChangeSubmit}
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ChipsArray;
