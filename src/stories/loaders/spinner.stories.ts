import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {SpinnerComponent} from "../../app/components/elements/loaders/spinner/spinner.component";


const meta: Meta<SpinnerComponent> = {
  title: 'Components/loaders/spinner',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        SpinnerComponent
      ]
    })
  ],
  args: {
    size: 'md',
  },
  argTypes: {
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
type Story = StoryFn<SpinnerComponent>;

export const Spinner: Story = (args) => ({
  template: `
  <app-spinner
    [size]="size"
    />
  `,
  props: args
});
