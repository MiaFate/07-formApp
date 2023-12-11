import type { Meta, StoryObj } from '@storybook/angular';

import { DynamicPageComponent } from './dynamic-page.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<DynamicPageComponent> = {
  component: DynamicPageComponent,
};

export default meta;
type Story = StoryObj<DynamicPageComponent>;

export const DynamicPageComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
