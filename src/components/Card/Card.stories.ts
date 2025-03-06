import type { Meta } from '@storybook/react'

import { Card } from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {
    preHeading: 'Your yearly premium',
    title: '£60.00',
    body: "That's as little as £5.00 a month",
  },
}

export const Large = {
  args: {
    preHeading: 'Your yearly premium',
    title: '£60.00',
    body: "That's as little as £5.00 a month",
    size: 'lg',
  },
}
