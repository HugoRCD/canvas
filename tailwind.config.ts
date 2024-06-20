import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'

function withOpacity(variableName: string) {
  // @ts-expect-error doesn't matter
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
    './**/*.svg',
  ],
  theme: {
    extend: {
      colors: {
        'main': 'var(--bg-main)',
        'main-opacity': withOpacity('--bg-main-opacity'),
        'secondary': 'var(--bg-secondary)',
        'muted': 'var(--font-muted)',
        'placeholder': 'var(--font-placeholder)',
      },
      textColor: {
        main: 'var(--font-primary)',
        muted: 'var(--font-muted)',
        placeholder: 'var(--font-placeholder)',
        inverted: 'var(--font-inverted)',
      },
      borderColor: {
        'primary': 'var(--border-primary)',
        'primary-hover': 'var(--border-primary-hover)',
        'muted': 'var(--border-muted)',
        'transparent': 'transparent',
      },
      borderWidth: {
        sm: '1px',
        md: '2px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },

      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },

      textShadow: {
        sm: 'rgba(255, 255, 255, 0.35) 1px 1px 12px',
      },

      fontFamily: {
        newsreader: ['Newsreader', 'serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: ['color'],
        },
      )
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme('spacing'),
          type: ['number', 'length', 'any'],
        },
      )
    }),
  ],
} satisfies Config
