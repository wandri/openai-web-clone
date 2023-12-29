import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {
  MultiInputSelectComponent
} from "../../app/components/elements/inputs/multi-input-select/multi-input-select.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const meta: Meta<MultiInputSelectComponent> = {
  title: 'Components/inputs/multi-select',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        MultiInputSelectComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    type: 'Documents',
    options: [
      {
        value: 'first example',
        displayValue: '1st example'
      },
      {
        value: 'second example',
        displayValue: '2nd example'
      },
    ],
  },
  argTypes: {
    type: {
      defaultValue: '',
      description: 'Label when no value is selected.',
      control: {type: 'text'}
    },
    options: {
      defaultValue: [],
      description: 'Document',
      control: {type: 'object'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<MultiInputSelectComponent>;

export const MultiSelect: Story = (args) => ({
  template: `
  <app-input-multi-select
    [type]="type"
    [options]="options"
    />
  `,
  props: args
});
