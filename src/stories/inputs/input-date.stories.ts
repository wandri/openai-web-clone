import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {InputDateComponent} from "../../app/components/elements/inputs/input-date/input-date.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const meta: Meta<InputDateComponent> = {
  title: 'Components/inputs/date',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        InputDateComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    label: 'Custom Label',
    description: 'Custom Description',
    placeholder: 'Custom Placeholder',
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
    placeholder: {
      defaultValue: '',
      description: 'The placeholder.',
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
type Story = StoryFn<InputDateComponent>;

export const InputDate: Story = (args) => ({
  template: `
  <app-input-date
    [label]="label"
    [placeholder]="placeholder"
    [description]="description"
    [required]="required"
    />
  `,
  props: {...args}
});
