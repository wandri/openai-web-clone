import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {ButtonComponent} from "../../app/components/elements/buttons/button/button.component";



const meta: Meta<ButtonComponent> = {
  title: 'Components/buttons/button',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        ButtonComponent
      ]
    })
  ],
  args: {
    label: 'Button',
    variant: 'default',
    color: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      description: 'The variant to use.',
      options: ['default', 'outline', 'ghost', 'link'],
      control: {type: 'select'}
    },
    color: {
      description: 'Theme color palette for the button.',
      options: ['primary', 'neutral'],
      control: {type: 'select'}
    },
    size: {
      description: 'The size to use.',
      options: ['xs', 'sm', 'md',],
      control: {type: 'select'}
    },
    disabled: {
      description: 'Whether the button is disabled.',
    },
    isLoading: {
      description: 'Whether the button is loading.',
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<ButtonComponent>;

export const Button: Story = (args) => ({
  template: `
  <app-button
    [color]="color"
    [disabled]="disabled"
    [variant]="variant"
    [size]="size"
    [isLoading]="isLoading"
    >{{ label }}</app-button>
  `,
  props: args
});
