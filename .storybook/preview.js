import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    exclude: ['writeValue', 'registerOnChange', 'registerOnTouched'],
    expanded: true
  },
  docs: { inlineStories: false }
};
