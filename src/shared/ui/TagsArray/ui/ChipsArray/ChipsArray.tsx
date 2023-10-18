import React, { ChangeEvent, useMemo, useState } from 'react';

import { Tag, List } from 'shared/ui/TagsArray/types/Tag';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import classNames from 'classnames';

import styles from './ChipArray.module.scss';

interface ChipsProps {
    items: Tag[]
    onChange?: (items: Tag) => void
    className?: string,
    id?: string
    editable?: boolean
}

const ChipsArray = (props: ChipsProps) => {
    const {
        onChange,
        className,
        items,
        id,
        editable,
    } = props;

    const [createTagMode, setCreateTagMode] = useState<boolean>(false);
    const [newTagValue, setTagValue] = useState<string>('');

    const handleCreateNewChip = () => {
        setCreateTagMode(true);
    };

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

            if (onChange) onChange(newTag);
        }
    };

    const renderItems = useMemo(() => items.map((value, index) => (
        <li
            className={styles.item}
            key={value.id}
        >
            {value.value}
        </li>
    )), [items, createTagMode]);

    if ((items.length === 0)) {
        return (
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
        );
    }

    return (
        <div className={classNames(styles.tagsRow, [className])}>
            {renderItems}
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
