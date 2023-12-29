import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {SvgIconModule} from "../../shared/svg-icon.module";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonGroupComponent} from "../../app/components/elements/buttons/button-group/button-group.component";


const meta: Meta<ButtonGroupComponent> = {
  title: 'Components/buttons/group',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        ButtonGroupComponent,
        SvgIconModule
      ]
    })
  ],
  args: {
    size: 'md',
    color: 'primary',
    disabled: false,
    buttons: [
      {
        svgIcon: 'playground',
      },
      {
        fontIcon: 'add',
      },
      {
        text: 'Multi button',
        options: [
          {
            text: '1st option',
            fontIcon: "emoji_events",
          },
          {
            text: '2nd option',
          }
        ]
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
    disabled: {
      description: 'Whether the button is disabled.',
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<ButtonGroupComponent>;

export const Group: Story = (args) => ({
  template: `
  <app-button-group
    [size]="size"
    [color]="color"
    [buttons]="buttons"
    [disabled]="disabled"
   />
  `,
  props: args
});
