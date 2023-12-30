import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {
  HeaderWithSubHeaderComponent
} from "../../app/components/elements/headers/header-with-sub-header/header-with-sub-header.component";


const meta: Meta<HeaderWithSubHeaderComponent> = {
  title: 'Components/headers/sub-header',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(ActivatedRoute)]
    }),
    moduleMetadata({
      imports: [
        HeaderWithSubHeaderComponent,
        RouterTestingModule
      ]
    })
  ],
  args: {
    title: 'Title of the header',
    content: 'Sub title of the header',
    titleTooltip: 'custom tooltip'
  },
  argTypes: {
    title: {
      description: 'Title of the header.',
    },
    content: {
      description: 'Content on the right side of the header (optional).',
    },
    titleTooltip: {
      description: 'Content of the tooltip (optional).',
    }
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<HeaderWithSubHeaderComponent>;

export const SubHeader: Story = (args) => ({
  template: `
  <app-header-with-sub-header [title]="title" [titleTooltip]="titleTooltip">{{ content }}</app-header-with-sub-header>
  `,
  props: {...args}
});
