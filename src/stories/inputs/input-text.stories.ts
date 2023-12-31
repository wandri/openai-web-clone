import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {InputTextComponent} from "../../app/components/elements/inputs/input-text/input-text.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";


const meta: Meta<InputTextComponent> = {
  title: 'Components/inputs/text',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        InputTextComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    label: 'Custom Label',
    description: 'Custom Description',
    placeholder: 'Custom Placeholder',
    type: 'text',
    isLoading: false,
    required: true,
    icon: undefined,
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
    type: {
      description: 'The type to use.',
      options: ['text', 'email'],
      control: {type: 'select'}
    },
    isLoading: {
      description: 'Whether the input is required.',
    },
    icon: {
      defaultValue: undefined,
      description: 'The icon to use.',
      control: {type: 'text'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<InputTextComponent>;

export const Text: Story = (args) => ({
  template: `
  <app-input-text
    [label]="label"
    [required]="required"
    [description]="description"
    [placeholder]="placeholder"
    [type]="type"
    [icon]="icon"
    [isLoading]="isLoading"
    >{{ label }}</app-input-text>
  `,
  props: args
});

export const TextWithIcon: Story = (args) => ({
  template: `
  <app-input-text
    [label]="label"
    [placeholder]="placeholder"
    [description]="description"
    [type]="type"
    [required]="required"
    [icon]="icon"
    [isLoading]="isLoading"
    />
  `,
  props: {...args, icon: 'playground'}
});

export const LoadingText: Story = (args) => ({
  template: `
  <app-input-text
    [label]="label"
    [placeholder]="placeholder"
    [description]="description"
    [type]="type"
    [required]="required"
    [icon]="icon"
    [isLoading]="isLoading"
    />
  `,
  props: {...args, isLoading: true}
});
