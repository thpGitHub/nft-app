// YourComponent.stories.ts|tsx

import React from 'react';
import '../css/styles.css'


import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '../components/Search/Search';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
// export {}