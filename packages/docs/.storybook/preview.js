/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'ignite-dark',
      values: [
        {
          name: 'ignite-light',
          value: '#E1E1E6',
        },
        {
          name: 'ignite-dark',
          value: '#121214',
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
