import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MenuDirective} from "../../app/components/directive/menu/menu.directive";


const meta: Meta<MenuDirective> = {
  title: 'Components/transformations/menu',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        MenuDirective,
      ]
    })
  ],
  args: {
    direction: 'bottom',
  },
  argTypes: {
    direction: {
      description: 'The direction of the menu.',
      options: ['top', 'bottom', 'left', 'right'],
      control: {type: 'select'}
    },

  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<MenuDirective>;

export const Menu: Story = (args) => ({
  template: `
<div class="flex w-full h-64 flex-col items-center justify-center gap-4">
  <div class="inline-block" [appMenuFor]="menu" appMenu appMenuDirection="left">Click to display <span class="text-red-500">left</span> menu</div>
  <div class="inline-block" [appMenuFor]="menu" appMenu appMenuDirection="right">Click to display <span class="text-red-500">right</span> menu</div>
  <div class="inline-block" [appMenuFor]="menu" appMenu appMenuDirection="top">Click to display <span class="text-red-500">top</span> menu</div>
  <div class="inline-block" [appMenuFor]="menu" appMenu appMenuDirection="bottom">Click to display <span class="text-red-500">bottom</span> menu</div>
</div>
<ng-template #menu>
  <div class="p-4">Any content can be displayed here</div>
</ng-template>

`,
  props: {...args}
});
