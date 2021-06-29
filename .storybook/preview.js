import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addParameters, addDecorator } from '@storybook/react';

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

addDecorator((Story) => (
  <div>
    <Story />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Raleway:400,500,700&display=swap"
      rel="stylesheet"
    ></link>
  </div>
));

addDecorator(withA11y);
addDecorator(withKnobs);
