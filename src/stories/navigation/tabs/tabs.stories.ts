import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {TabComponent} from "../../../app/components/navigation/tabs/tab/tab.component";
import {importProvidersFrom} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const selections = ['tab 1', 'tab 2', 'tab 3'];
const meta: Meta<TabComponent> = {
  title: 'Components/navigation/tabs',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)]
    }),
    moduleMetadata({
      imports: [
        TabComponent,
      ]
    })
  ],
  args: {
    selections: selections,
    selectedSelection: 'tab 2',
    position: undefined,
  },
  argTypes: {
    selectedSelection: {
      description: 'Selected tab',
    },
    selections: {
      description: 'Tabs to display',
      control: {type: 'object'}
    },
    position: {
      description: 'Horizontal position of tabs',
      defaultValue: 'left',
      options: ['left', 'center', 'right'],
      control: {type: 'select'}
    },
  },
  parameters: {
    controls: {expanded: true},
    layout: 'fullscreen',
  }
} as Meta;

export default meta;
type Story = StoryFn<TabComponent>;

export const Tabs: Story = (args) => ({
  template: `
  <app-tab [selections]="selections" [selectedSelection]="selectedSelection" [position]="position" class="h-12 inline-block w-full"/>
  `,
  props: args
});

