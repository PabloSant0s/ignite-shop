import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    fontFamily: 'Roboto',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
