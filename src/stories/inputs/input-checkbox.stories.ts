import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {InputCheckboxComponent} from "../../app/components/elements/inputs/input-checkbox/input-checkbox.component";



const meta: Meta<InputCheckboxComponent> = {
  title: 'Components/inputs/checkbox',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        InputCheckboxComponent,
      ]
    })
  ],
  args: {
    label: 'Custom Label',
  },
  argTypes: {
    label: {
      defaultValue: '',
      description: 'The label.',
      control: {type: 'text'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<InputCheckboxComponent>;

export const Checkbox: Story = (args) => ({
  template: `
  <app-input-checkbox>{{ label }}</app-input-checkbox>
  `,
  props: {...args}
});
