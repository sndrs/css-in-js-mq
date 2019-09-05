# Proof of concept for css-in-js-mq:

```js
import { from } from 'css-in-js-mq'

const style = {
	color: 'red',

	[from.small()]: {
		color: 'blue',
	},

	[from.medium.until.large()]: {
		color: 'green',
	},
}
```

Live example: https://sndrs.github.io/css-in-js-mq
