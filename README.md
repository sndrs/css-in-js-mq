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

Live example: https://sndrs.github.io/css-in-js-mq
