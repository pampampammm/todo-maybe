import React, { ChangeEvent, useMemo, useState } from 'react';

import { Chip } from 'shared/ui/TagsArray/types/Chip';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Input, { InputTheme } from 'shared/ui/Input/Input';
import classNames from 'classnames';

import styles from './ChipArray.module.scss';

interface ArrayProps {
    tags: Chip[]
    onChange?: (items: Chip) => void
    className?: string
}

const ChipsArray = (props: ArrayProps) => {
    const {
        onChange,
        className, tags,
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
            const newTag: Chip = {
                id: tags.length + 1,
                text: newTagValue,
            };

            setTagValue('');
            setCreateTagMode(false);

            if (onChange) onChange(newTag);
        }
    };

    const renderItems = useMemo(() => tags.map((value, index) => (
        <li
            className={styles.item}
            key={value.id}
        >
            {value.text}
            {(index === tags.length - 1 && !createTagMode)
                && (
                    <Button
                        type="button"
                        theme={ButtonTheme.CLEAR}
                        onClick={handleCreateNewChip}
                    >
                        +
                    </Button>
                )}

        </li>
    )), [tags, createTagMode]);

    return (
        <ul className={classNames(styles.tagsRow, [className])}>
            {renderItems}
            {createTagMode && (
                <li className={styles.item}>
                    <Input
                        theme={InputTheme.CLEAR}
                        className={styles.tagInput}
                        value={newTagValue}
                        onChange={handleValueChange}
                    />
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.submitAddBtn}
                        onClick={onTagsChangeSubmit}
                    >
                        +
                    </Button>
                </li>
            )}

        </ul>
    );
};

export default ChipsArray;
