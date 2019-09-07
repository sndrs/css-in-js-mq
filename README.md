_n.b. work on this has been moved to https://github.com/src-mq/src-mq_

# Proof of concept for css-in-js-mq:

```js
import { from, until } from 'css-in-js-mq'

const style = {
    color: 'red',

    [until.xSmall()]: {
        color: 'blue',
    },

    [from.small()]: {
        color: 'blue',
    },

    [from.medium.until.large()]: {
        color: 'green',
    },
}
```

## Options

Breakpoint methods can also take 2 options:
- `media` Array of [media types](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_types) (no default - i.e. all)
- `and` Array of [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) (no default)

```js
import { from, until } from 'css-in-js-mq'

const style = {
    [until.xSmall({ and: ['(prefers-reduced-motion: reduce)'] })]: {
        color: 'blue',
    },

    [until.xSmall({ media: ['print'] })]: {
        color: 'blue',
    },
}
```

Live example: https://sndrs.github.io/css-in-js-mq
