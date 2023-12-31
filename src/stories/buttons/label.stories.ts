import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {LabelComponent} from "../../app/components/elements/inputs/label/label.component";


const meta: Meta<LabelComponent> = {
  title: 'Components/inputs/label',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        LabelComponent
      ]
    })
  ],
  args: {
    label: 'Custom Label',
    description: 'Custom Description',
    required: true,
  },
  argTypes: {
    label: {
      defaultValue: '',
      description: 'The label.',
      control: {type: 'text'}
    },
    description: {
      defaultValue: '',
      description: 'The description.',
      control: {type: 'text'}
    },
    required: {
      description: 'Whether the input is required.',
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<LabelComponent>;

export const Label: Story = (args) => ({
  template: `
  <app-label
    [label]="label"
    [required]="required"
    [description]="description"
    >Content inside the label</app-label>
  `,
  props: args
});
