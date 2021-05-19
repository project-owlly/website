module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          default: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        tertiary: {
          default: 'var(--color-tertiary)',
          dark: 'var(--color-tertiary-dark)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        dark: 'var(--color-dark)',
        medium: 'var(--color-medium)',
        light: 'var(--color-light)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
