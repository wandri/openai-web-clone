import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {ButtonTextComponent} from "../../app/components/elements/buttons/button-text/button-text.component";



const meta: Meta<ButtonTextComponent> = {
  title: 'Components/buttons/buttonText',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        ButtonTextComponent
      ]
    })
  ],
  args: {
    label:'Button',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    size: {
      description: 'The size to use.',
      options: ['sm', 'md',],
      control: {type: 'select'}
    },
    color: {
      description: 'Theme color palette for the button.',
      options: ['primary', 'neutral'],
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
type Story = StoryFn<ButtonTextComponent>;

export const TextButton: Story = (args) => ({
  template: `
  <app-button-text
    [size]="size"
    [disabled]="disabled"
    [isLoading]="isLoading"
    >{{ label }}</app-button-text>
  `,
  props: args
});
