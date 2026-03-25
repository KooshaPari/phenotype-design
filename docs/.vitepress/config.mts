import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createPhenotypeConfig } from '../../vendor/phenodocs/packages/docs/src/config/index.ts'

export default createPhenotypeConfig({
  title: 'Phenotype Design',
  description: 'Keycap palette — design tokens and style guide',
  githubRepo: 'phenotype-design',

  nav: [
    { text: 'Guide', link: '/guide/getting-started' },
    { text: 'Tokens', link: '/tokens/colors' },
    { text: 'Components', link: '/components/badges' },
  ],

  sidebar: [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Usage', link: '/guide/usage' },
      ],
    },
    {
      text: 'Tokens',
      items: [
        { text: 'Colors', link: '/tokens/colors' },
        { text: 'Typography', link: '/tokens/typography' },
      ],
    },
    {
      text: 'Components',
      items: [
        { text: 'Badges', link: '/components/badges' },
        { text: 'Cards & Pipeline', link: '/components/cards' },
      ],
    },
  ],

  overrides: {
    appearance: 'dark',
    markdown: {
      theme: { light: 'github-light', dark: 'vitesse-dark' },
    },
    vite: {
      resolve: {
        alias: {
          '@phenotype/docs/theme': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/theme/index.ts'),
          '@phenotype/docs/config': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/config/index.ts'),
          '@phenotype/docs/utils': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/utils/index.ts'),
          '@phenotype/docs/types': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/types/index.ts'),
          '@phenotype/docs/css/keycap-palette.css': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/css/keycap-palette.css'),
          '@phenotype/docs/css/custom.css': resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs/packages/docs/src/css/custom.css'),
        },
      },
      server: {
        fs: {
          allow: [resolve(dirname(fileURLToPath(import.meta.url)), '../../vendor/phenodocs')],
        },
      },
    },
  },
})
