import { useMemo } from 'react';

import { Page, PageHeader } from 'widgets/Page';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import Input, { InputSize, InputTheme } from 'shared/ui/Input/Input';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    const header = useMemo(() => <PageHeader text="Components" />, []);

    return (
        <Page className={styles.page} headerText="Components">
            About Page
            <Button theme={ButtonTheme.BACKGROUND}>ButtonTheme.BACKGROUND</Button>
            <Button theme={ButtonTheme.OUTLINE}>ButtonTheme.OUTLINE</Button>
            <Button theme={ButtonTheme.OUTLINE_INVERTED}>ButtonTheme.OUTLINE_INVERTED</Button>
            <Button theme={ButtonTheme.CLEAR}>ButtonTheme.CLEAR</Button>
            <Button theme={ButtonTheme.CLEAR_INVERTED}>ButtonTheme.CLEAR_INVERTED</Button>
            Input
            <Input placeholder="InputTheme.BACKGROUND" theme={InputTheme.BACKGROUND} inputSize={InputSize.L} />
            <Input placeholder="InputTheme.OUTLINE" theme={InputTheme.OUTLINE} inputSize={InputSize.L} />
            <Input placeholder="InputTheme.OUTLINE_INVERTED" theme={InputTheme.OUTLINE_INVERTED} inputSize={InputSize.L} />
            <Input placeholder="InputTheme.CLEAR" theme={InputTheme.CLEAR} inputSize={InputSize.L} />
            <Input placeholder="InputTheme.CLEAR_INVERTED" theme={InputTheme.CLEAR_INVERTED} inputSize={InputSize.L} />
        </Page>
    );
};

export default AboutPage;
