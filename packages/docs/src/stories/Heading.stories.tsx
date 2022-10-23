import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@maps-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Heading',
    size: 'md',
    as: 'h2',
    css: {},
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
      description: 'Text size',
      defaultValue: {
        summary: 'md',
      },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
      type: 'string',
      description: 'HTML Tag',
      defaultValue: {
        summary: 'h2',
      },
    },
    children: {
      type: 'string',
      description: 'Heading text',
      required: true,
      control: {
        type: 'text',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading will always be an `h2` tag, but you can change this with the `as` property:',
      },
    },
  },
}

export const CustomSize: StoryObj<HeadingProps> = {
  args: {
    children: 'Small Heading',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading has a medium (md) size, but you can change this by passing one of the size options through the `size` property:',
      },
    },
  },
}

export const CustomCSS: StoryObj<HeadingProps> = {
  args: {
    children: 'Blue Heading',
    css: { color: '#1065C0' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an object through the `css` property:',
      },
    },
  },
}
