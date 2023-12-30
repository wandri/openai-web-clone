import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {HighlightDirective} from "../../app/components/directive/highlight/highlight.directive";


const meta: Meta<HighlightDirective> = {
  title: 'Components/transformations/highlight',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        HighlightDirective,
      ]
    })
  ],
  args: {
    highlightLink: undefined,
    appHighlightTooltip: undefined,
    appHighlightDisabled: false,
  },
  argTypes: {
    highlightLink: {
      description: 'Whether there is a link.',
    },
    appHighlightTooltip: {
      description: 'Whether there is a tooltip.',
    },
    appHighlightDisabled: {
      description: 'Whether it is disabled.',
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<HighlightDirective>;

export const SimpleHighlight: Story = (args) => ({
  template: `
  <div class="inline-block" appHighlight [highlightLink]="highlightLink" [appHighlightTooltip]="appHighlightTooltip" [appHighlightDisabled]="appHighlightDisabled">Simple highlighted text</div>
  `,
  props: {...args}
});

export const HighlightWithTooltip: Story = (args) => ({
  template: `
  <div class="inline-block" appHighlight [highlightLink]="highlightLink" [appHighlightTooltip]="appHighlightTooltip" [appHighlightDisabled]="appHighlightDisabled">Hover me</div>
  `,
  props: {...args, appHighlightTooltip: 'This is a tooltip'}
});

export const HighlightWithLink: Story = (args) => ({
  template: `
  <div class="inline-block" appHighlight [highlightLink]="highlightLink" [appHighlightTooltip]="appHighlightTooltip" [appHighlightDisabled]="appHighlightDisabled">Click to open the link</div>
  `,
  props: {
    ...args,
    highlightLink: 'https://github.com/wandri/openai-web-clone'
  }
});
