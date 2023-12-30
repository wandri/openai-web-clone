import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {BadgeComponent} from "../app/components/elements/tag/badge.component";


const meta: Meta<BadgeComponent> = {
  title: 'Components/badge',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        BadgeComponent
      ]
    })
  ],
  args: {
    size: 'md',
    label: 'Custom badge'
  },
  argTypes: {
    label: {
      description: 'The content of the badge.',
    },
    size: {
      description: 'The size to use.',
      options: ['sm', 'md',],
      control: {type: 'select'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<BadgeComponent>;

export const Badge: Story = (args) => ({
  template: `
  <app-badge
    [size]="size"
    >{{ label }}</app-badge>
  `,
  props: args
});
