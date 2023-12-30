import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {SvgIconModule} from "../../shared/svg-icon.module";
import {TextAreaComponent} from "../../app/components/elements/inputs/text-area/text-area.component";
import {ButtonComponent} from "../../app/components/elements/buttons/button/button.component";
import {IconComponent} from "../../app/components/elements/icon/icon.component";


const meta: Meta<TextAreaComponent> = {
  title: 'Components/inputs/text-area',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        TextAreaComponent,
        ButtonComponent,
        IconComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    label: 'Custom Label',
    description: 'Custom Description',
    placeholder: 'Custom Placeholder',
    required: false,
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
type Story = StoryFn<TextAreaComponent>;

export const TextArea: Story = (args) => ({
  template: `
  <app-text-area class="font-sm"
    [label]="label"
    [placeholder]="placeholder"
    [description]="description"
    [required]="required"
    />
  `,
  props: args
});

export const TextAreaExample: Story = (args) => ({
  template: `
<div class="border p-6 rounded-lg bg-white transition-all flex flex-col gap-4">
        <app-text-area placeholder="Enter your messages"></app-text-area>
        <div class="flex items-center justify-between">
          <app-button color="neutral" size="sm">
            <app-icon svgIcon="attach-file"/>
          </app-button>
          <div class="flex gap-2 items-center">
            <app-button color="neutral" disabled size="sm">
              <app-icon svgIcon="add"/>
            </app-button>
            <app-button color="neutral" disabled size="sm">
              <app-icon svgIcon="run"/>
              <span>Run</span>
            </app-button>
          </div>
        </div>
      </div>
  `,
  props: args
});
