import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {AutocompleteComponent} from "../../app/components/elements/inputs/autocomplete/autocomplete.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const meta: Meta<AutocompleteComponent> = {
  title: 'Components/inputs/autocomplete',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        AutocompleteComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    placeholder: 'Custom placeholder',
    value: '1st value',
    options: ['1st value', '2nd value'],
    size: 'sm',
  },
  argTypes: {
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
type Story = StoryFn<AutocompleteComponent>;

export const Autocomplete: Story = (args) => ({
  template: `
  <app-autocomplete
    class="w-52"
    [value]="value"
    [size]="size"
    [options]="options"
    [placeholder]="placeholder"
    />
  `,
  props: args
});
