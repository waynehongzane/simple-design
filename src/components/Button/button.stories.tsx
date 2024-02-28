// Import your component
import React from 'react';
import Button, { ButtonSize,ButtonType } from './button';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Button',
    component: Button,
    decorators: [withInfo],
    parameters: {
        info: {
            inline: true
        }
    }
};

export const DefaultButton = () => <Button onClick={action('clicked')}>default button</Button>
DefaultButton.storyName = 'Button'

export const ButtonWithSize = () => (
    <>
        <Button size={ButtonSize.Large}>large button</Button>
        <Button size={ButtonSize.Small}>small button</Button>
    </>
)
ButtonWithSize.storyName = '不同尺寸的 Button'

export const ButtonWithType = () => (
    <>
        <Button btnType={ButtonType.Primary}>primary button</Button>
        <Button btnType={ButtonType.Danger}>danger button</Button>
        <Button btnType={ButtonType.Link}>link button</Button>
    </>
)
ButtonWithType.storyName = '不同类型的 Button'
