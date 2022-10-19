import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@maps-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/matheusandrade23.png',
    alt: 'Matheus Andrade',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Matheus Andrade',
  },
}
