import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {ButtonIconComponent} from "../../app/components/elements/buttons/button-icon/button-icon.component";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";


const meta: Meta<ButtonIconComponent> = {
  title: 'Components/buttons/buttonIcon',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        ButtonIconComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    disabled: false,
    fontIcon: 'add',
    svgIcon: undefined,
  },
  argTypes: {
    svgIcon: {
      description: 'Custom icon',
      control: {type: 'text'},
    },
    fontIcon: {
      description: 'Icon from material',
      control: {type: 'text'},
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
type Story = StoryFn<ButtonIconComponent>;

export const SvgIcon: Story = (args) => ({
  template: `
  <app-button-icon
    [disabled]="disabled"
    [fontIcon]="fontIcon"
    [svgIcon]="svgIcon"
    >{{ label }}</app-button-icon>
  `,
  props: {
    ...args,
    svgIcon: 'playground',
    fontIcon: undefined,
  },
});
export const fontIcon: Story = (args) => ({
  template: `
  <app-button-icon
    [disabled]="disabled"
    [fontIcon]="fontIcon"
    >{{ label }}</app-button-icon>
  `,
  props: {
    ...args,
  }
});
