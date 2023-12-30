import {applicationConfig, Meta, moduleMetadata, StoryFn} from '@storybook/angular';
import {SkeletonLoaderComponent} from "../../app/components/elements/loaders/skeleton-loader/skeleton-loader.component";


const meta: Meta<SkeletonLoaderComponent> = {
  title: 'Components/loaders/skeleton-loader',
  decorators: [
    applicationConfig({
      providers: []
    }),
    moduleMetadata({
      imports: [
        SkeletonLoaderComponent
      ]
    })
  ],
  args: {},
  argTypes: {},
  parameters: {
    controls: {expanded: true}
  }
} as Meta;

export default meta;
type Story = StoryFn<SkeletonLoaderComponent>;

export const SkeletonLoader: Story = (args) => ({
  template: `
  <app-skeleton-loader
    class="h-6 w-52"
    />
  `,
  props: args
});
