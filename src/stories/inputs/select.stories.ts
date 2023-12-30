import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SelectComponent} from "../../app/components/elements/inputs/select/select.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";


const meta: Meta<SelectComponent> = {
  title: 'Components/inputs/select',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        SelectComponent,
        SvgIconModule,
        ReactiveFormsModule
      ]
    })
  ],
  args: {
    label: 'Custom label',
    description: 'Custom description',
    placeholder: 'Custom placeholder',
    value: '1st value',
    options: [
      {label: '1st value', description: '1st description'},
      {label: '2nd value'},
      {label: '3rd value', description: '3rd description'},
    ],
    size: 'sm',
    control: new FormControl('1st value')
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
    placeholder: {
      defaultValue: '',
      description: 'The placeholder.',
      control: {type: 'text'}
    },
    value: {
      defaultValue: '',
      description: 'The value.',
      control: {type: 'text'}
    },
    size: {
      description: 'The size to use.',
      options: ['sm', 'md'],
      control: {type: 'select'}
    },
    options: {
      description: 'The options to use.',
      control: {type: 'object'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<SelectComponent>;

export const Select: Story = (args) => ({
  template: `
  <app-select
    class="w-52"
    [value]="value"
    [size]="size"
    [options]="options"
    [placeholder]="placeholder"
    [label]="label"
    [description]="description"
    [required]="required"
    />
  `,
  props: args
});
