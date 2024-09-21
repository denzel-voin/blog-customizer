import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
	argTypes: {
		isOpen: {
			control: 'boolean',
			defaultValue: false,
		},
		toggleForm: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: (args) => {
		return <ArrowButton {...args} />;
	},
	args: {
		isOpen: false,
		toggleForm: () => console.log('Form toggled'),
	},
};
