import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {TagComponent} from "../app/components/elements/tag/tag.component";


const meta: Meta<TagComponent> = {
  title: 'Components/tag',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        TagComponent
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
type Story = StoryFn<TagComponent>;

export const Tag: Story = (args) => ({
  template: `
  <app-tag class="inline-block"
    [size]="size"
    >{{ label }}</app-tag>
  `,
  props: args
});
