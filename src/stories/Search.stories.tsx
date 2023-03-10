// YourComponent.stories.ts|tsx

import React from 'react';
import '../css/styles.css'


import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '../components/Search/Search';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*π The args you need here will depend on your component */
};
// export {}