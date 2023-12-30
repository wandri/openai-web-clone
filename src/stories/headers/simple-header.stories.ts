import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {HeaderComponent} from "../../app/components/elements/headers/header/header.component";
import {importProvidersFrom} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";


const meta: Meta<HeaderComponent> = {
  title: 'Components/headers/simple-header',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(ActivatedRoute)]
    }),
    moduleMetadata({
      imports: [
        HeaderComponent,
        RouterTestingModule
      ]
    })
  ],
  args: {
    title: 'Title of the header',
    content: undefined,
    tabs: undefined
  },
  argTypes: {
    title: {
      description: 'Title of the header.',
    },
    content: {
      description: 'Content on the right side of the header (optional).',
    },
    tabs: {
      description: 'Tabs of the header (optional).',
      control: {type: 'object'}
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<HeaderComponent>;

export const SimpleHeader: Story = (args) => ({
  template: `
  <app-header [title]="title" [tabs]="tabs">  {{ content }}</app-header>
  `,
  props: args
});

export const HeaderWithButton: Story = (args) => ({
  template: `
  <app-header [title]="title" [tabs]="tabs">
    {{ content }}
</app-header>
  `,
  props: {...args, content: "Custom content on the right side"}
});

export const HeaderWithTabs: Story = (args) => ({
  template: `
  <app-header [title]="title" [tabs]="tabs">
    {{ content }}
</app-header>
  `,
  props: {
    ...args,
    title: 'Header with tabs',
    tabs: [{name: 'tab 1', route: ['a']}, {name: 'tab 2', route: ['b']}, {name: 'tab 3', route: ['c']}]
  }
});
