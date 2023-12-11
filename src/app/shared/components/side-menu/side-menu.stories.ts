import type { Meta, StoryObj } from '@storybook/angular';

import { SideMenuComponent } from './side-menu.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<SideMenuComponent> = {
  component: SideMenuComponent,
};
interface MenuItem {
  title: string;
  route: string;
}
export default meta;
type Story = StoryObj<SideMenuComponent>;

const reactiveMenu: MenuItem[] = [
  { title: 'Basicos', route: './reactive/basic' },
  { title: 'Dinamicos', route: './reactive/dynamic' },
  { title: 'Switches', route: './reactive/switches' },
]
const authMenu: MenuItem[] = [
  { title: 'Registro', route: './auth' },
]

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    authMenu,
    reactiveMenu
  },
};
