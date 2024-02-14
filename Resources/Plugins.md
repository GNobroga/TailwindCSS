# addUtilities

Permite adicionar nossas próprias classes utilitárias

```js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    })
  ]
}
```

# matchUtilities 

Permite que adicionar classes utilitárias dinâmicamente usando a anotação **name-[value]**.


```js
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    }
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          tab: (value) => ({
            tabSize: value
          }),
        },
        { values: theme('tabSize') }
      )
    })
  ]
}

```

# Prefix and Important

Permite especificar para o tailwind um prefixo para as classes não sobrescreverem classes já existentes na aplicação e se elas são important ou não.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  // ...

```

# addComponents

Permite criar components, ou seja um agrupamento de classes para reaproveitar.

```js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ]
}
```

# addBase

Permite iniciar o css do tailwind com resets, modificações, etc. Por exemplo a font padrão vai ser 20px

```js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}
```