import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {SelectionButtonComponent} from "../../app/components/elements/buttons/multi-buttons/selection-button.component";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const meta: Meta<SelectionButtonComponent> = {
  title: 'Components/buttons/selection',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        SelectionButtonComponent,
        SvgIconModule
      ]
    })
  ],
  args: {
    size: 'md',
    color: 'primary',
    buttons: [
      {
        svgIcon: 'playground',
      },
      {
        fontIcon: 'add',
      },
      {
        text: 'All'
      },
    ],
  },
  argTypes: {
    size: {
      description: 'The size to use.',
      defaultValue: 'sm',
      options: ['sm', 'md',],
      control: {type: 'select'}
    },
    color: {
      description: 'Theme color palette for the button.',
      options: ['primary', 'neutral'],
      defaultValue: 'primary',
      control: {type: 'select'}
    },
    buttons: {
      description: 'The buttons to use.',
      control: {type: 'object'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<SelectionButtonComponent>;

export const Selection: Story = (args) => ({
  template: `
  <app-selection-button
    [size]="size"
    [color]="color"
    [buttons]="buttons"
   />
  `,
  props: args
});
