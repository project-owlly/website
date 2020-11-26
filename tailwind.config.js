module.exports = (isProd) => ({
  prefix: '',
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts'],
  },
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
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
  plugins: [],
});
