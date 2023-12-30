import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {NoticeComponent} from "../app/components/elements/notice/notice.component";
import {SvgIconModule} from "../shared/svg-icon.module";


const meta: Meta<NoticeComponent> = {
  title: 'Components/notice',
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
    }),
    moduleMetadata({
      imports: [
        NoticeComponent,
        SvgIconModule,
      ]
    })
  ],
  args: {
    label: 'Custom notice',
    svgIcon: 'playground',
  },
  argTypes: {
    svgIcon: {
      description: 'Custom icon',
      control: {type: 'text'},
    },
    label: {
      description: 'Content to display',
      control: {type: 'text'},
    },
  },
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<NoticeComponent>;

export const Notice: Story = (args) => ({
  template: `
  <app-notice
    [svgIcon]="svgIcon"
    >{{ label }}</app-notice>
  `,
  props: {
    ...args,
    svgIcon: 'playground',
  },
});
