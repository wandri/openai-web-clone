import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {SelectDropdownComponent} from "../../app/components/elements/inputs/select-dropdown/select-dropdown.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const meta: Meta<SelectDropdownComponent> = {
  title: 'Components/inputs/select-dropdown',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        SelectDropdownComponent,
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
type Story = StoryFn<SelectDropdownComponent>;

export const SelectDropdown: Story = (args) => ({
  template: `
  <app-select-dropdown
    class="w-52"
    [value]="value"
    [size]="size"
    [options]="options"
    [placeholder]="placeholder"
    />
  `,
  props: args
});
