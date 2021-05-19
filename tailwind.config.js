module.exports = {
  //mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        /*{
          default: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },*/
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        /*{
          default: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },*/
        'secondary-dark': 'var(--color-secondary-dark)',
        tertiary: 'var(--color-tertiary)',
        /*{
          default: 'var(--color-tertiary)',
          dark: 'var(--color-tertiary-dark)',
        },*/
        'tertiary-dark': 'var(--color-tertiary-dark)',
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
