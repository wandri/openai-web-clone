import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderTabComponent} from "../../app/components/elements/headers/header-tab/header-tab.component";


const meta: Meta<HeaderTabComponent> = {
  title: 'Components/headers/tabs-header',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(ActivatedRoute)]
    }),
    moduleMetadata({
      imports: [
        HeaderTabComponent,
        RouterTestingModule
      ]
    })
  ],
  args: {
    content: undefined,
    tabs: undefined
  },
  argTypes: {

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
type Story = StoryFn<HeaderTabComponent>;

export const HeaderWithTabs: Story = (args) => ({
  template: `
  <app-header-tab [tabs]="tabs">
    {{ content }}
</app-header-tab>
  `,
  props: {
    ...args,
    tabs: [{name: 'tab 1', route: ['a']}, {name: 'tab 2', route: ['b']}, {name: 'tab 3', route: ['c']}]
  }
});
